// LAB 15: Sales Analyzer

let sales = [1200, 1500, 900, 2000, 1700, 1300, 1600];

let totalSales = 0;
let bestDay = sales[0];
let worstDay = sales[0];

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];

    if (sales[i] > bestDay) {
        bestDay = sales[i];
    }

    if (sales[i] < worstDay) {
        worstDay = sales[i];
    }
}

console.log("Total Weekly Sales:", totalSales);
console.log("Best Day Sales:", bestDay);
console.log("Worst Day Sales:", worstDay);