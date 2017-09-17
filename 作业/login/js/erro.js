/*
* @Author: Administrator
* @Date:   2017-09-15 17:09:06
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 17:36:07
*/
let shu = document.getElementById("shu");
t = setInterval(function(){
	if(shu.innerText<=0){
		clearInterval(t);
		location.replace('login.html');
	}
	shu.innerText -=1;
}, 1000)