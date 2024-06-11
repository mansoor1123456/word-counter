#! /usr/bin/env node 
import inquirer from "inquirer";

// Declare a constant 'answers' and assign it to teh result of inquirer.prompt function

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the world: "
    }   
])

const words = answers.Sentence.trim().split(" ")

// Print the array of words to the console
console.log(words)

// Print the word count of the sentence to the console
console.log(`Your Sentence word count is ${words.length}`);




