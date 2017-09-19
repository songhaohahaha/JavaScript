/*
* @Author: Administrator
* @Date:   2017-09-19 17:53:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 18:41:12
*/
let ul = document.getElementsByClassName('banner')[0];
// let lis = ul.getElementsByTagName('li')[0];
let imgs = ul.getElementsByTagName('img');
let btns = document.getElementsByClassName('btn')[0];
let btn  = btns.getElementsByTagName('li')
let left = document.getElementsByClassName('jiantou-left')[0];
let right = document.getElementsByClassName('jiantou-right')[0];
let t;
let num = 0;
t = setInterval(move, 2000);
function move(){
	num++;
	if(num == imgs.length){
		num = 0;
	}
	for(let i =0;i<imgs.length;i++){
		imgs[i].style.display = 'none';
		btn[i].style.background = '#1C1C20'
	}
	imgs[num].style.display = 'block';
	btn[num].style.background = '#7c7c81'
}
function moveL(){
	num--;
	if(num < 0){
		num = imgs.length-1;
	}
	for(let i =0;i<imgs.length;i++){
		imgs[i].style.display = 'none';
		btn[i].style.background = '#1C1C20'
	}
	imgs[num].style.display = 'block';
	btn[num].style.background = '#7c7c81'
}
for(let i =0;i<btn.length;i++){
	btn[i].onmouseover = function(){
		// 停止定时器
		clearInterval(t);
		// 循环。让所有图片隐藏，让所有li变灰
		for(let i=0;i<6;i++){
			imgs[i].style.display = 'none';
			btn[i].style.background = '#1C1C20';
		}
		imgs[i].style.display = 'block';
		btn[i].style.background = '#7c7c81';
		num = i;
	}
	btn[i].onmouseout = function(){
		t = setInterval(move, 2000);
	}
}
right.onclick=function(){
	move();
}
left.onclick = function(){
	moveL();
}