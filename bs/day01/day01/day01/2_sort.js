//三大排序算法: 冒泡，插入，快速
var arr=[3,5,1,4,2];
function insertSort(arr){
  for(var i=1;i<arr.length;i++){
    var t=arr[i];
    var p=i-1;
    do{
      if(p>=0&&arr[p]>t){
        arr[p+1]=arr[p];
        p--;
      }else{
        arr[p+1]=t;
        break;
      }
    }while(true);
  }
}
insertSort(arr);
console.log(String(arr));

var arr=[3,1,6,4,2,7,5];
function quickSort(arr){
  if(arr.length<=1) return arr;
  else{
    var c=arr.splice(
      parseInt(arr.length-1)/2
      ,
      1
    )[0];
    var left=[],right=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i]>c)
        right.push(arr[i]);
      else left.push(arr[i]);
    }
    return quickSort(left).concat(
              c,quickSort(right));
  }
}
arr=quickSort(arr);
console.log(String(arr));