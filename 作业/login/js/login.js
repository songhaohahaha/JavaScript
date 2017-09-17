/*
* @Author: Administrator
* @Date:   2017-09-15 17:08:56
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 18:57:04
*/
let inputEle1 = document.getElementById("inputEle1");
let inputEle2 = document.getElementById("inputEle2");
let btn = document.getElementById("btn");
btn.onclick = function(){
	if(inputEle1.value.trim()=='zhangsan' && inputEle2.value.trim() == '123456'){
		alert('登录成功');
	}else{
		location.assign('erro.html');
	}
}