#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\tWelcome To The TypeScript Quiz System\t"));
console.log(chalk.yellow.bold("\t You have to get minimum 7 points\t"));
console.log(chalk.blue.bold(".".repeat(80)));
let points = 0;
let outOf = 10;
let question1 = await inquirer.prompt([{
        name: "Q1",
        type: "list",
        message: "Q1- TypeScript is a superset of which programming language?",
        choices: ["A) Java", "B) C++", "C) JavaScript", "D) Python"]
    }]);
if (question1.Q1 == "C) JavaScript") {
    console.log(chalk.green.bold("Correct Answer: " + question1.Q1));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
let question2 = await inquirer.prompt([{
        name: "Q2",
        type: "list",
        message: "Q2- What is the file extension of TypeScript files?",
        choices: ["A) .js", "B) .ts", "C) .txt", "D) .html"]
    }]);
if (question2.Q2 == "B) .ts") {
    console.log(chalk.green.bold("Correct Answer: " + question2.Q2));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
let question3 = await inquirer.prompt([{
        name: "Q3",
        type: "list",
        message: "Q3- Which command is used to compile TypeScript code?",
        choices: ["A) tsc", "B) compile", "C) run", "D) exec"]
    }]);
if (question3.Q3 == "A) tsc") {
    console.log(chalk.green.bold("Correct Answer: " + question3.Q3));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
let question4 = await inquirer.prompt([{
        name: "Q4",
        type: "list",
        message: "Q4- Which of the following is NOT a TypeScript data type?",
        choices: ["A) Number", "B) Boolean", "C) String", "D) Array"]
    }]);
if (question4.Q4 == "D) Array") {
    console.log(chalk.green.bold("Correct Answer: " + question4.Q4));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
let question5 = await inquirer.prompt([{
        name: "Q5",
        type: "list",
        message: "Q5- What keyword is used to declare a variable in TypeScript?",
        choices: ["A) var", "B) let", "C) const", "D) declare"]
    }]);
if (question5.Q5 == "B) let") {
    console.log(chalk.green.bold("Correct Answer: " + question5.Q5));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
let question6 = await inquirer.prompt([{
        name: "Q6",
        type: "list",
        message: "Q6- What is the purpose of TypeScript's 'interface' keyword?",
        choices: ["A) To define custom data types", "B) To create loops", "C) To import modules", "D) To handle exceptions"]
    }]);
if (question6.Q6 == "A) To define custom data types") {
    console.log(chalk.green.bold("Correct Answer: " + question6.Q6));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
let question7 = await inquirer.prompt([{
        name: "Q7",
        type: "list",
        message: "Q7- Which symbol is used for type assertion in TypeScript?",
        choices: ["A) <>", "B) !!", "C) **", "D) ++"]
    }]);
if (question7.Q7 == "A) <>") {
    console.log(chalk.green.bold("Correct Answer: " + question7.Q7));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
let question8 = await inquirer.prompt([{
        name: "Q8",
        type: "list",
        message: "Q8- Which keyword is used to define a function in TypeScript?",
        choices: ["A) function", "B) def", "C) func", "D) fn"]
    }]);
if (question8.Q8 == "A) function") {
    console.log(chalk.green.bold("Correct Answer: " + question8.Q8));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
let question9 = await inquirer.prompt([{
        name: "Q9",
        type: "list",
        message: "Q9- What is the default visibility modifier for members of a TypeScript class?",
        choices: ["A) public", "B) private", "C) protected", "D) internal"]
    }]);
if (question9.Q9 == "A) public") {
    console.log(chalk.green.bold("Correct Answer: " + question9.Q9));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
let question10 = await inquirer.prompt([{
        name: "Q10",
        type: "list",
        message: "Q10- What tool can be used for debugging TypeScript code?",
        choices: ["A) Visual Studio Code", "B) IntelliJ IDEA", "C) Sublime Text", "D) Eclipse"]
    }]);
if (question10.Q10 == "A) Visual Studio Code") {
    console.log(chalk.green.bold("Correct Answer: " + question10.Q10));
    points++;
}
else {
    console.log(chalk.red.bold("Incorrect Answer"));
}
console.log(chalk.blue.bold(".".repeat(80)));
if (points >= 7) {
    console.log(chalk.green.bold("Congratulation"));
    console.log(chalk.green.bold(`Your Points : ${points} Out Of ${outOf}.`));
}
else {
    console.log(chalk.yellow.bold("Sorry!, You Lost"));
    console.log(chalk.yellow.bold(`Your Points : ${points} Out Of ${outOf}.`));
}
