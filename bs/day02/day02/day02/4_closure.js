var a=0,b=0;
function A(a){//外层函数：局部变量a
  //内层函数
  A=function(b){console.log(a+b++);}
  //将内层函数赋值给全局变量A形成闭包
  console.log(a);
}
A(1);//1
//A:function(b){(a=1)
// console.log(a+b++);}
A(12);//13