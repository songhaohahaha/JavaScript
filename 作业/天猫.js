/*
* @Author: Administrator
* @Date:   2017-09-18 17:10:41
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 17:29:02
*/
window.onload = function(){

	var lunbo = document.getElementById("banner");
	var imgs = lunbo.getElementsByTagName('img');
	var lis = lunbo.getElementsByClassName('yuanquan');

	var c = 0; //大总管变量

		// 控制图片切换
	var timer = setInterval(run,2000);
	function run (){
		c++;
		if(c==6){
			c=0;
		}
		for(var i=0;i<6;i++){
			imgs[i].style.display = 'none';
			lis[i].style.background = '#dddddd';
		}
			// 让C号图片显示，c号li变红
		imgs[c].style.display = 'block';
		lis[c].style.background = '#A10000';
			
	}
		// 循环 给li加事件
		for(var i=0;i<lis.length;i++){
			// 给i号li加序号属性,把值存在对象的属性里
			lis[i].xuhao = i; 
			// 给i号li加鼠标移入
			lis[i].onmouseover = function(){
				// 因为移入暂停要延续这个开始，所以变量只能有一个。把this.xuhao给C
				c = this.xuhao;
				// 停止定时器
				clearInterval(timer);
				// 循环。让所有图片隐藏，让所有li变灰
				for(var i=0;i<6;i++){
					imgs[i].style.display = 'none';
					lis[i].style.background = '#dddddd';
				}
				imgs[c].style.display = 'block';
				lis[c].style.background = '#A10000';	
			}
			// 移入事件结束
			// 移出事件
			lis[i].onmouseout = function(){
				timer = setInterval(run,2000);
			}
			// 移出事件结束
		}
		
	let aside = document.getElementsByTagName('aside')[0];
	let liss = aside.getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	for(let i=0;i<liss.length;i++){
		liss[i].onmouseover = function(){
			item[i].style.display = 'block';
			// console.log(item[i])
		}
		liss[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}
	
	// 轮播按钮点击事件

	// var lunbo = document.getElementById("banner");
	// 	var imgs = lunbo.getElementsByTagName('img');
	// 	var lis = lunbo.getElementsByClassName('yuanquan');

	// 循环全隐藏方法
	// 	for(let i =0;i<lis.length;i++){
	// 		lis[i].onmouseover = function(){
	// 			for(let i=0;i<6;i++){
	// 				imgs[i].style.display = 'none';
	// 				lis[i].style.background = '#dddddd';
	// 			}
	// 		imgs[i].style.display = 'block';
	// 		lis[i].style.background = '#A10000';
	// 		}
	// }
	
	//  前一个隐藏，现在的显示
		// let now = 0;
		// for(let i =0;i<lis.length;i++){
		// 	lis[i].onclick = function(){
		// 		imgs[now].style.display = 'none';
		// 		imgs[i].style.display = 'block';
		// 		now = i;
		// 	}
		// }
		

	// 闭包函数方法
		// let now = 0;
		// for(let i =0;i<lis.length;i++){
		// 	lis[i].index = i;
		// 	lis[i].onclick = (function(i){
		// 		return function(){
		// 			imgs[now].style.display = 'none';
		// 			lis[now].style.background = '#dddddd';
		// 			imgs[this.index].style.display = 'block';
		// 			lis[this.index].style.background = '#A10000';
		// 			now = this.index;
		// 		}
		// 	})()
		// }
	let shoucang = document.getElementsByClassName('shoucangjia');
	let shoulis = document.getElementsByClassName("main-right")[0];
	let shouli = shoulis.getElementsByTagName("li")[3];
	let shouli1 = shouli.getElementsByClassName("shoucangjia");

	shouli.onmouseover = function(){
		shouli1[0].style.display =  "block";
	}
	shouli.onmouseout = function(){
		shouli1[0].style.display = "none";
	}
}
