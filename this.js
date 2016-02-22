var ArrayProto = Array.prototype,
	ObjProto = Object.prototype,
	FuncProto = Function.prototype;

var _=function(obj){
	if(obj instanceof _) return obj;
	if(!(this instanceof _)) return new _(obj);
	this._wrapped = obj;
};
//js中this 的用法

//this 指向 调用函数的那个对象
//情况1：纯粹的函数调用
function test(){
	this.x = 1;
	alert(this.x);
}
test();//1 调用函数的对象为window
//证明this就是全局对象
var x = 1;

function test(){
	alert(this.x);
}
test();//1

//
var x = 1;
function test(){
	this.x = 0;
}
test();//调用函数 

alert(x); //0 this 指向调用函数的对象

//情况2：作为某个对象的方法调用，this此时就指这个上级对象。
function test(){
	alert(this.x);
}
var o={};
o.x = 1;
o.m= test;
o.m();//1
//情况3：作为构造函数使用 构造函数：通过这个函数生成一个新的对象。此时this 指向这个新对象

function test(){this.x=1;}

var o = new test();

alert(o.x);//1
//情况4：apply调用 apply()是函数对象的一个方法，他的作用改变函数的调用对象，他的第一个参数就表示改变后的调用这个函数的对象。this指的就是这个第一个参数。
var x = 0;
function test(){
	alert(this.x);
}
var o={};

o.x=1;
o.m=test;
o.m.apply();
//apply()参数为空时。默认调用全局对象；

