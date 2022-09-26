
//

///deklarera variabler 

const txt1 = document.getElementById('text_box1');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function fun1(){
	out1.innerHTML = txt1.value;
}

btn1.addEventListener('click', fun1)




const txt2 = document.getElementById('text_box2');
const btn2 = document.getElementById('btn2');
const out2 = document.getElementById('output2');

function fun2(){
	out2.innerHTML = txt2.value;
}

btn2.addEventListener('click', fun2)
