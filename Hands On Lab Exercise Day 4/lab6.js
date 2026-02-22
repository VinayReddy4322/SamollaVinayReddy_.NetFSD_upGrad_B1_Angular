let marks=[85,90,78,88,92];
let total=0;

for(let i=0;i<marks.length;i++){
    total+=marks[i];
}
let average=total/marks.length;
console.log("Total:"+total);
console.log("Average:"+average);
if(average>=90){
    console.log("Grade A");
}
else if(average>=75){
    console.log("Grade B");
}
else if(average>=60){
    console.log("Grade C");
}
else{
    console.log("Fail");
}