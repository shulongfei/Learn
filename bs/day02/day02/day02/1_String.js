var str="ryan is not a good man";
     //ryan5 is6 not7 a8 good9 man10
var n=5;
var reg=/\b[a-zA-Z]+\b/ig;
str=str.replace(reg,kw=>kw+n++);
console.log(str);


//计算一个只有乘法和加法的表达式的值
//比如: 1+23*2+3*3*3
function calc(str){
  var arr=str.split("+");//按+分割成数组
  var sum=0;
  for(var exp of arr){
    if(exp.indexOf("*")==-1)
      sum+=parseFloat(exp);
    else{
      var nums=exp.split("*");
      var r=1;
      for(var num of nums){
        r*=num;
      }
      sum+=r;
    }
  }
  return sum;
}
console.log(calc("1+23*2+3*3*3"));




//查找字符串中出现次数最多的字符，共出现几次?
var str="abdcbcdadcabce";
str=str.split("").sort().join("");
console.log(str);

var reg=/([a-z])\1*/ig;
        //  1
        //第一位必须是一个字母
        //\1 表示匹配和第一个()中完全相同的内容
var arr=str.match(reg).sort(
  //按每个子字符串的长度降序排列
  (a,b)=>b.length-a.length
);
console.log(arr);
console.log(
  "出现次数最多的字符是:"+arr[0][0]
  +",共"+arr[0].length+"次"
);

