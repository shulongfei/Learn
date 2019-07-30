//var a=0,b=0;
//function A(a){
//  A=function(b){console.log(a+b++);}
//  console.log(a);
//}
//A(1);//1
////A:function(b){//(a=1)
//// console.log(a+b++);
//// }
//A(12);//13







//function fun(n,o){
//  console.log(o);//输出第二个参数值
//  return {
//    fun:function(m){//保护:第一个参数值
//      return fun(m,n);
//    }
//  }
//}
//var a=fun(0);//undefined
////a:{
//// fun:function(m){//(n=0)
////   return fun(m,n);
//// }
////}
//    a.fun(1);//0
//    a.fun(2);//0
//    a.fun(3);//0
//var b=fun(0)//undefined
////b:{
//// fun:function(m){//(n=0)
////   return fun(m,n);
//// }
////}
//    .fun(1)//0
////{
//// fun:function(m){//(n=1)
////   return fun(m,n);
//// }
////}
//    .fun(2)//1
////{
//// fun:function(m){//(n=2)
////   return fun(m,n);
//// }
////}
//    .fun(3);//2
//var c=fun(0)//undefined
////c:{
//// fun:function(m){//(n=0)
////   return fun(m,n);
//// }
////}
//    .fun(1);//0
////c:{
//// fun:function(m){//(n=1)
////   return fun(m,n);
//// }
////}
//    c.fun(2);//1
//    c.fun(3);//1

var arr=[];
function fun(){
  for(var i=0;i<4;i++){
   var x={};
   //x.no=i;
   //x.text=arr[i];
   x.fun=function(){console.log(i)};
   arr.push(x);
  }//i=4
}
fun();
//arr:[//(i=4)
//  x:{
//    fun:function(){console.log(i)}
//  },
//  x:{
//    fun:function(){console.log(i)}
//  },
//  x:{
//    fun:function(){console.log(i)}
//  },
//  x:{
//    fun:function(){console.log(i)}
//  },
// ]
arr[0].fun();//4
arr[1].fun();//4
arr[2].fun();//4
arr[3].fun();//4
//
var funs=(function(){
  for(var i=0,arr=[];i<3;i++){
    arr[i]=function(){
      console.log(i)
    };
  }//i=3
  return arr;
})();
//arr:[//(i=3)
// function(){console.log(i)},
// function(){console.log(i)},
// function(){console.log(i)},
// ]
funs[0]();//3
funs[1]();//3
funs[2]();//3