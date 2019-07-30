var str="aaaddddcccffessss";
str=str.split("").sort().join("");
var reg=/([a-z])\1*/ig;
var arr=str.match(reg).sort((a,b)=>b.length-a.length);
console.log(arr);
console.log("出现次数最多的字母是"+arr[0][0]+"出现的次数是"+arr[0].length);


var s="1223      332  ";
while(s.indexOf(" ")!=-1){
    s=s.replace(" ","");
}
console.log(s);

function randomRepeat(){
    var nums=[];
    while(nums.length<6){
        r=parseInt(Math.random()*33+1);
        for(var i=0;i<nums.length;i++){
            if(r==nums[i]){
                break;
            }
        }
        if(i==nums.length){
            nums.push(r);
        }
    }
    nums.sort((a,b)=>a-b);
    return nums;
}
console.log(randomRepeat());
