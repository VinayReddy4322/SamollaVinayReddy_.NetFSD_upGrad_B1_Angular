// LAB 11: Salary Analysis

let salaries = [25000, 30000, 28000, 35000, 40000];
let totalSalary = 0;

for (let i = 0; i < salaries.length; i++) {
    totalSalary += salaries[i];
}

let avgSalary = totalSalary / salaries.length;

console.log("Total Salary:", totalSalary);
console.log("Average Salary:", avgSalary);

console.log("Salaries above average:");
for (let i = 0; i < salaries.length; i++) {
    if (salaries[i] > avgSalary) {
        console.log(salaries[i]);
    }
}