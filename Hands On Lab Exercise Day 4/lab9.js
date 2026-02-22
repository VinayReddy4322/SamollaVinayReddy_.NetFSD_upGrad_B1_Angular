let array=[5,4,6,8,2,1,9];
let largestNumber=array[0];
let smallestNumber=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]>largestNumber){
        largestNumber=array[i];
    }
    if(array[i]<smallestNumber){
        smallestNumber=array[i];
    }
}
console.log("Largest Number:"+largestNumber);
console.log("Smallest number:"+smallestNumber);