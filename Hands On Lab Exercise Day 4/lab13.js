let nums=[12,15,18,21,24];
let sum=0;
let evenCount=0;
let oddCount=0;

for(let i=0;i<nums.length;i++){
    sum+=nums[i];
    if(nums[i]%2===0){
        evenCount++;
    }
    else{
        oddCount++;
    }
}
let average=sum/nums.length;

console.log("Sum:"+sum);
console.log("Average:"+average);
console.log("EvenCOunt:"+evenCount);
console.log("OddCount:"+oddCount);
