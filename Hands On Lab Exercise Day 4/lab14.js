// LAB 14: Menu Driven Program (Node.js Version)

const readline = require("readline-sync");

let arr = [];
let choice;

do {
    console.log("\n1. Add Element");
    console.log("2. Remove Element");
    console.log("3. Display Array");
    console.log("4. Exit");

    choice = readline.question("Enter your choice: ");

    switch (choice) {
        case "1":
            let element = readline.question("Enter element to add: ");
            arr.push(element);
            console.log("Element Added!");
            break;

        case "2":
            if (arr.length > 0) {
                arr.pop();
                console.log("Last element removed!");
            } else {
                console.log("Array is empty!");
            }
            break;

        case "3":
            console.log("Array:", arr);
            break;

        case "4":
            console.log("Exiting...");
            break;

        default:
            console.log("Invalid choice!");
    }

} while (choice !== "4");