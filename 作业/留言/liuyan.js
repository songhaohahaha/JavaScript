/*
* @Author: Administrator
* @Date:   2017-09-25 18:32:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-25 19:06:30
*/
window.onload = function(){
	let liuyanTop = document.getElementsByClassName('liuyan-top')[0];
	let liuyanBot = document.getElementsByClassName('liuyan-bottom')[0];
	let textTop = liuyanTop.getElementsByClassName('wen1')[0];
	// let textBot = liuyanBot.getElementsByTagName('span')[0];
	let btn = document.getElementsByTagName('button')[0];
	btn.onclick = function(){
		let texts = document.createElement('p');
		texts.style.cssText = `width:100%;height:50px; border:1px solid orange;`;
		liuyanBot.prependChild(texts);
		texts.innerHTML = textTop.value;
		textTop.value = '';
	}
}
