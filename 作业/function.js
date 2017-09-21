/*
* @Author: Administrator
* @Date:   2017-09-19 17:55:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-21 17:47:57
*/
// function getClass(classname,ranger){
// 		ranger = ranger ? ranger : document;
// 		if(document.getElementsByClassName){
// 			return ranger.getElementsByClassName(classname);
// 		}else{
// 			var newarr = [];
// 			var all = ranger.getElementsByTagName('*');
// 			for(var i=0;i<all.length;i++){
// 				if(checkClass(all[i].className,classname)){
// 					newarr.push(all[i])
// 				}
// 			}
// 			return newarr;
// 		}
// 	}
// 	// 检查是否className中是否存在classname；
// 	function checkClass(className,classname){
// 		var arr = className.split(' ');
// 		for(var i=0;i<arr.length;i++){
// 			if(arr[i] == classname){
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
// 	function $(select，ranger){
// 		ranger = ranger ? ranger : document;
// 		var first = select.charAt(0);
// 		if(first == '.'){
// 			return getClass(first.substring(1),ranger);
// 		}else if(first == '#'){
// 			return ranger.getElementById(first.substring(1));
// 		}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
// 			return ranger.getElementsByTagName(select);
// 		}
// 	}

	// 用函数的方法实现漂浮广告；
// 	let box = document.getElementById('box');
// 	let box1 = document.getElementById('box1');
// 	let box2 = document.getElementById('box2');
// 	let box3 = document.getElementById('box3');
// 	let move1 = new Float(box);
// 	let move2 = new Float(box1);
// 	let move3 = new Float(box2);
// 	let move4 = new Float(box3);
	
	function Float(obj){
		this.obj = obj;
		this.speedX = 1;
		this.speedY = 1;
		this.maxY = window.innerHeight - obj.offsetHeight;
		this.maxX = window.innerWidth - this.obj.offsetWidth;
	}
	Float.prototype.run = function(){
		let that = this;
		let t = setInterval(function(){
			let lefts = that.obj.offsetLeft;
			let tops = that.obj.offsetTop;
			that.obj.style.left = lefts + that.speedX + 'px';
			that.obj.style.top = tops + that.speedY + 'px';
			let newleft = parseInt(that.obj.style.left);
			let newtop = parseInt(that.obj.style.top);
			if(newleft == that.maxX){
				that.speedX = -1;
			}
			if(newleft == 0){
				that.speedX = 1;
			}
			if(newtop == that.maxY){
				that.speedY = -1;
			}
			if(newtop == 0){
				that.speedY = 1;
			}


		},4)
	}
	Float.prototype.resize = function(){
		this.maxX = window.innerWidth - this.obj.offsetWidth;
		this.maxY = window.innerHeight - this.obj.offsetHeight;


	}
	window.onresize = function(){
		// 让广告归位
		// move1.resize();
		// move2.resize();
		// move3.resize();
		// move4.resize();
			 
	}	
	// move1.run();
	// move2.run();
	// move3.run();
	// move4.run();
	

	// 实现找一个元素后面那个标签的功能，element传这个元素，tagname传要找的标签
	function next(element,tagname){
		let parent = element.parentNode;
		let child = parent.children;
		let index = 0;
		for(let i =0;i<child.length;i++){
			if(child[i]==element){
				index = i;
				break;
			}
		}
		let nextAll = Array.from(child).slice(index+1);
		for(let i=0;i<nextAll.length;i++){
			if(nextAll[i].nodeName == tagname.toUpperCase()){
				return nextAll[i]
			}
		}
		return null;
	}

	