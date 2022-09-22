

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navlogo = document.querySelector('.navbar_logo')



// display mobile menu and close

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const dragonsmenu = document.querySelector('#dragons-page');
    const castmenu = document.querySelector('#cast-page');
    const housesmenu = document.querySelector('#houses-page');
    let scrollPos = window.scrollY;

    // adds higlight class to menu items

    if (window.innerWidth > 960 && scrollPos < 600) {
        dragonsmenu.classList.add('highlight');
        castmenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        castmenu.classList.add('highlight');
        dragonsmenu.classList.remove('highlight');
        housesmenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        housesmenu.classList.add('highlight');
        castmenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);






// Random House generator 

const hex =["Targaryen of King's Landing", "Arryn of the Eyrie", "Baratheon of Storm's End", "Stark of Winterfell", "Tully of Riverrun", "House Tyrell of Highgarden", "House Lannister of Casterly Rock", "Greyjoy of Pyke", "Martell of Sunspear"];

const btn = document.getElementById("houses_btn");
const houses = document.querySelector(".houses");

btn.addEventListener('click', function(){
    let hexhouses = '';
    for(let i = 0;i<1;i++){
        hexhouses += hex[getRandomNumber()];
    } 
    houses.textContent = hexhouses;
    
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}