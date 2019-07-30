//函数记忆:
//什么是: 让函数记住曾经处理过的参数以及处理结果
//为什么: 避免重复计算
//何时: 今后只要一个函数，有可能反复计算时
//如何:闭包
//需求:
// 判断一个数是不是质数
function isPrime(n){
  if(n<=3) return true;
  else if(n%2==0) return false;
  else{
    for(var i=3;i<Math.sqrt(n);i+=2){
      if(n%i==0) return false;
    }
    return true;
  }
}
console.log(
  isPrime(17),//true
  isPrime(111) //false
);
var isPrime2=(function(){//外层函数
  var hash={};
  return function(n){
    if(n<=3) return true;
    else if(n%2==0) return false;
    else if(hash[n]!==undefined)
      return hash[n];
    else{
      for(var i=3;i<=Math.sqrt(n);i+=2){
        if(n%i==0) {
          hash[n]=false;
          return false;
        }
      }
      hash[n]=true;
      return true;
    }
  }
})();
console.log(
  isPrime2(17),//true
  isPrime2(111) //false
);
for(var i=0,arr=[];i<1000000;i++){
  arr.push(
    parseInt(Math.random()*1000+1000)
  )
}
console.time("isPrime");
for(var i=0;i<arr.length;i++){
  isPrime(arr[i]);
}
console.timeEnd("isPrime");
console.time("isPrime2");
for(var i=0;i<arr.length;i++){
  isPrime2(arr[i]);
}
console.timeEnd("isPrime2");
