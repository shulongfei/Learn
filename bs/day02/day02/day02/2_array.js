//数组降维
var arr=[
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
];

var result=[];
//方法一:
//for(var r=0;r<arr.length;r++){
//  //arr[r]: [0,0,0,0]
//  for(var c=0;c<arr[r].length;c++){
//    result.push(arr[r][c])
//  }
//}
//方法二:
//result=arr[0];
//for(var r=1;r<arr.length;r++){
//  //arr[r]: [0,0,0,0]
//  result=result.concat(arr[r])
//}
//方法三:
result=[].concat.apply([],arr);
//apply: 先将arr:[0,0,0,0],.....
//concat:将每个[0,0,0,0],变为0,0,0,0
console.dir(result);

//给定降序排列好的数组:
var arr=[7,6,5,4,3,2,1];
      // ↑           ↑
      // i           j
      //[1,7,2,6,3,5,4]
var r=[];
for(var i=0,j=arr.length-1;i<j;i++,j--){
  r.push(arr[j]); r.push(arr[i]);
}
if(i==j) r.push(arr[i]);
console.log(r);


//前提:已经升序排列好了
var arr=[1,2,4,6,9,10,12,15,17];
       //↑                  ↑
       //i                  j
var sum=19;
for(var i=0,j=arr.length-1;i<j;){
  if(arr[i]+arr[j]<sum)
    i++;
  else if(arr[i]+arr[j]>sum)
    j--;
  else{
    console.log(arr[i],arr[j]);
    i++;j--;
  }
}
