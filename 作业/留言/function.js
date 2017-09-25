/*
* @Author: Administrator
* @Date:   2017-09-19 17:55:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-25 19:03:55
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
	// function next(element,tagname){
	// 	let parent = element.parentNode;
	// 	let child = parent.children;
	// 	let index = 0;
	// 	for(let i =0;i<child.length;i++){
	// 		if(child[i]==element){
	// 			index = i; 
	// 			break;
	// 		}
	// 	}
	// 	let nextAll = Array.from(child).slice(index+1);
	// 	for(let i=0;i<nextAll.length;i++){
	// 		if(nextAll[i].nodeName == tagname.toUpperCase()){
	// 			return nextAll[i]
	// 		}
	// 	}
	// 	return null;
	// }

	// 第二种
	// function next1(element,tagname){
	// 	let parent = element.parentNode;
	// 	let child = parent.children;
	// 	let index = 0;
	// 	let i =0;
	// 	while(!child[i] == element){
	// 		i++;
	// 		index = i;
	// 	}
	// 	let nextAll = Array.from(child).slice(index+1);
	// 	for(let i=0;i<nextAll.length;i++){
	// 		while(nextAll[i].nodeName == tagname.toUpperCase()){
	// 			return nextAll[i];
	// 		}
	// 	}
	// 	return null;
	// }

	// 第三种
	function nexts(element,tagname){
		let nexts = element.nextSibling;
		if(nexts == null){
			return null;
		}
		while(nexts.nodeName != tagname.toUpperCase()){
			nexts = nexts.nextSibling;
			if(nexts == null){
				return null;
			}
			if(nexts.nodeName == tagname.toUpperCase()){
				return nexts;
			}
		}
	} 
	function nextAll(element){
		let arr = [];
		let nexts = element.nextElementSibling;
		if(!nexts){
			return null;
		}
		arr.push(nexts);
		while(nexts != null){
			arr.push(nexts);
			nexts = nexts.nextElementSibling;
		}
		return arr;
	}
	function parent(element){
		if(element.nodeName == 'BODY' || element.nodeName == 'HTML'){
			return;
		}
		let arr = [];
		let parent = parent.parentNode;
		while(parent.parentNode != 'BODY'){
			arr.push(parent);
			parent = prent.parentNode;
		}
		return arr;
	}


	// 页面中插入随机个随机属性的标签
	
	function insert(number){
		for(let i=0;i<number;i++){
			// 创建div
			let divs = document.createElement('div');
			// 给div加类名改变div样式
			divs.className = 'circle';
			// 给随机定位属性
			let tops = Math.floor(Math.random()*(innerHeight-100));
			let lefts = Math.floor(Math.random()*(innerWidth-100));
			
			// 给随机宽高
			let wid = Math.floor(Math.random()*(100+1-30)+30);
			// let hei = Math.floor(Math.random()*(100+1-30)+30);
			// 给随机颜色
			// let a = Math.floor(Math.random()*(999999+1-0)+0);
			let r =  Math.floor(Math.random()*(255+1-0)+0);
			let g =  Math.floor(Math.random()*(255+1-0)+0);
			let b =  Math.floor(Math.random()*(255+1-0)+0);
			// divs.style.transition = 'all'+','+'1s'
			// 把生成的div插入到页面
			setTimeout(function(){
				divs.style.transitionDelay = `${i*10}ms`
				divs.style.top = `${tops}px`;
				divs.style.left = `${lefts}px`;
				divs.style.width = `${wid}px`;
				divs.style.height = `${wid}px`;
				divs.style.background = 'rgb('+r+','+g+','+b+')';
			},50)  
			document.body.appendChild(divs);
		}
	}

	// 用div画圆
	let pointer = document.querySelector('.pointer')
	function circle(r,num){
		let deg = 360/30;
		for(let i=0;i<num;i++){
			if(i%30==0){
				r += 50;
			}
			let divs = document.createElement('div');
			divs.className = 'circle';
			
			// 弧度
			let rad  = deg * i * Math.PI/180;
			let lefts = r*Math.cos(rad);
			let tops = r*Math.sin(rad);
			// 把div插入到页面pointer上。
			
			
			// 添加动效
			setTimeout(function(){
				divs.style.transitionDelay = `${i*10}ms`;
				color(divs);
				divs.style.left = lefts+'px';
				divs.style.top = tops+'px'
				
			},10)
			setInterval(function(){
				color(divs);
				pointer.appendChild(divs);
			},20)
		}
	}
	// 取随机的颜色。rgb
	function color(divs){
		let x =  Math.floor(Math.random()*(255+1-0)+0);
		let g =  Math.floor(Math.random()*(255+1-0)+0);
		let b =  Math.floor(Math.random()*(255+1-0)+0);
		divs.style.background = 'rgb('+x+','+g+','+b+')';
	}
	// 给HTML的原型函数添加方法   
	// 在特定元素的后面加一个元素 this相当于position，相当于特定元素
	HTMLElement.prototype.insertAfter = function(element){
		let next = this.nextElementSibling;
		let parent = this.parentNode;
		if(next){
			parent.insertBefore(element,next);
		}else{
			parent.appendChild(element)
		}
	}
	// 在特定元素的儿子里最前面加一个元素
	HTMLElement.prototype.prependChild = function(element){
		let first = this.firstElementChild;
		if(first){
			this.insertBefore(element,first);
		}else{
			this.appendChild(element);
		}
	}
	// 把一个元素插入到他的父元素中的最后
	HTMLElement.prototype.appendTo = function(element){
		element.appendChild(this);
	}
	// 把一个元素插入到他的父元素的最前面
	HTMLElement.prototype.prependTo = function(element){
		element.appendChild(this)
	}
	// HTMLElement.prototype.empty() = function(){
	// 	this.innerHTML ='';
	// }