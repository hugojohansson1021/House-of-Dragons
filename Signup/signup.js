
//

///deklarera variabler 

const txt1 = document.getElementById('text_box1');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function fun1(){
	out1.innerHTML = txt1.value;
};
btn1.addEventListener('click', fun1)



const txt2 = document.getElementById('text_box2');
const btn2 = document.getElementById('btn2');
const out2 = document.getElementById('output2');

function fun2(){
	out2.innerHTML = txt2.value;
};
btn2.addEventListener('click', fun2)



const txt3 = document.getElementById('text_box3');
const btn3 = document.getElementById('btn3');
const out3 = document.getElementById('output3');

function fun3(){
	out3.innerHTML = txt3.value;
};
btn3.addEventListener('click', fun3)



const txt4 = document.getElementById('text_box4');
const btn4 = document.getElementById('btn4');
const out4 = document.getElementById('output4');

function fun4(){
	out4.innerHTML = txt4.value;
};
btn4.addEventListener('click', fun4);



function myfun(){
	var x1=document.getElementById('text_box1').value;
	var x2=document.getElementById('text_box2').value;
	var x3=document.getElementById('text_box3').value;
	var x4=document.getElementById('text_box4').value;
	 alert("UserName : "+x1+"\n Password :"+x2+"\n Email :"+x3+"\n Age :"+x4);

	
}