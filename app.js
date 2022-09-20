

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navlogo = document.querySelector('.navbar_logo')



// display mobile menu and close

const mobilemenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}


menu.addEventListener('click', mobilemenu);



