let price=[400,300,350,200];
let totalAmount=0;

for(let i=0;i<price.length;i++){
    totalAmount+=price[i];
}

if(totalAmount>1000){
    totalAmount=totalAmount-(totalAmount*0.10);
   console.log("Discount Applied (10%");
}

console.log("Final Bill:"+totalAmount);