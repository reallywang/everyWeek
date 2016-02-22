继承与原型链

1.基于原型链的继承

继承属性：js对象有一个指向一个原型对象的链。当访问一个对象的属性时，它不仅在对象上搜索，还在对象的原型上，以及对象原型的原型上，层层向上搜索。

function getProperty(obj,prop){
	if(obj.hasOwnProperty(prop)){
		return obj[prop];
	}else if(obj.__proto__!==null){
		return getProperty(obj.__proto__,prop);
	}else{
		return undefined;
	}
}
var Point={
	x:0,
	y:0,
	print:function(){console.log(this.x,this.y);}
};
var p={x:10,y:20,__proto__:Point};
p.print();

怪异的原型继承

function Point(x,y){
	this.x=x;
	this.y=y;
}
Point.prototype={
	print:function(){console.log(this.x,this.y);}
};
var p=new Point(10,20);
p.print();

//new 的工作原理
function New(f){
	var n={'__proto__':f.prototype};/*创建类的实例；把一个空对象的__proto__属性设置为F.prototype*/
	return function (){
		f.apply(n,arguments);/*初始化实例。函数F被传入参数并调用，关键字this被设定为该实例*/
		return n;//返回实例
	};
}
someObject.[[Prototype]] 用于指派someObject的原型。

继承方法：
使用不同的方法来创建对象和生成原型链

 使用普通语法创建对象：
	var o = {a:1};
	// o这个对象继承了Object.prototype上面的所有属性

	// o.hasOwnPrototype('a')
	//hasOwnPrototype是Object.prototype的自身属性
	//Object.prototype的原型为null;
 使用构造器创建对象

	 function Graph(){
	 	this.vertexes=[];
	 	this.edges=[];
	 }

	Graph.prototype = {
		addVertex:function(v){
			this.vertexes.push(v);

		}
	};
	var g = new Graph();

 使用Object.create创建对象

	 Object.create()调用这个方法创建一个新的对象，新对象的原型就是调用create方法时传入的第一个参数

	 var objA={a:1};
	 var b=Object.create(objA);

 使用class关键字（ECMA6）


 性能：

 在原型链上查找属性比较耗时，试图访问不存在的属性时会遍历整个原型链。

 hasOwnProperty 检测对象的属性是定义在自身还是原型链上，所有继承自Object.prototype的对象都含有这个方法。

 hasOwnProperty 是js中唯一一个只涉及对象自身属性而不会遍历原型链的方法。

原型继承：

__proto__属性来表示一个对象的原型链。


/*typeof 与 instanceof*/

typeof :获得对象 类型的字符串表示；'undefined','object','boolean','number','string','function'
instanceof :1.判断一个实例是否属于某种类型 2. 在继承关系中判断一个实例是否属于他的父类型。



//Objects
var Person = function(){}

var gray = new Person();

console.log(typeof(gray));//Object
gray instanceof Person //true


原型继承：

对象中有一个隐藏属性[[prototype]] chrome中是__proto__,而在某些环境下则不可访问。指向对象的原型。

方式1：原型链继承

function Parent(){}
function Child(){}
Child.prototype = new Parent();

//所有函数的默认原型都是Object的实例。
//在js中函数具有一个原型属性prototype。当调用构造函数创建对象的时候，所有该构造函数原型的属性在新创建的对象上都可以使用。

//声明父类，通过构造函数和原型添加有关属性和方法
function Super(){
	this.property=true;
}
Super.prototype.getSuperValue=function(){
	return this.property;
};
//声明子类的构造函数

function SubType(){
	this.subproperty=false;
}


//将子类的原型指向父类的实例，得到父类属性和方法

SubType.prototype=new Super();
