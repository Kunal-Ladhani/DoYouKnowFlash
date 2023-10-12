import readlineSync from 'readline-sync';
import chalk from 'chalk';

const log = console.log;

// let's write modular code this time :)
// modular means that the big codebase is divided into small pieces of code that do their specifc function ie, modules.

// it improves the readability of code.

const highscore = {
    name: "Kunal",     // because I AM THE GREATEST FLASH FAN!
    score: "6"
};
// Object to store the highscore

let score = 0;
//score of the player

let name;
//name of the player

//Array of objects
const questions = [
    {
        question: "What is Flash's real name ?",
        answer: ["Barry Allen", "barry"]
    },
    {
        question: "What is the name of A.I. that he developed in the future ?",
        answer: ["Gidion"]
    },
    {
        question: "What is the name of flash's archnemesis - Reverse Flash ?",
        answer: ["Eobard Thawne", "Eobard"]
    },
    {
        question: "How many versions of flash were present when his mom died ?",
        answer: ["2"]
    },
    {
        question: "What was flash's mother's name ?",
        answer: ["Nora Allen", "Nora"]
    },
];

const bonusQuestion = {
    question: "Who mentored Barry to reach his capabilities as the flash ?",
    answer: ["Dr. Harrison Wells", "Harrison Wells", "Harrison", "Dr. Wells"]
};

// welcome function
const welcome = () => {
    name = readlineSync.question("Please enter your name.\n");

    log(chalk.yellowBright.underline.italic("\nHi! " + name) + " \nLet's see how much do you know about my favourite Superhero -" + chalk.red.bold(" ⚡FLASH⚡"));
}

// function to ask question and return the points scored
const askQuestion = (question, answers) => {
    const ans = readlineSync.question(question + '\n');

    for (let i = 0; i < answers.length; i++) {
        if (ans.toUpperCase() === answers[i].toUpperCase()) {
            log(chalk.green("Correct Answer :)"));
            log("-----------------------------------------------");
            return 1;
        }
    }
    log(chalk.red("Wrong Answer :("));
    log("-----------------------------------------------");
    return 0;
};

// function for the gameplay
const game = () => {
    for (var i = 0; i < questions.length; i++) {
        score += askQuestion("\nQ" + (i + 1) + ") " + questions[i].question, questions[i].answer);
    }

    if (score === 5) {
        log(chalk.redBright("\nYAAY! You have reached the BONUS question!\n"));
        var bonus = questions.length + 1;
        score += askQuestion("Q" + bonus + ") " + bonusQuestion.question, bonusQuestion.answer);
    }
}

// function to display the score of the player
const showScore = () => {
    if (score === highscore.score) {
        highscore.score = score;
        highscore.name = name;
    }
    log(chalk.magentaBright.underline.bold("\nYour Score") + chalk.magentaBright.bold(" : ") + score);
    log(chalk.red.bold("Highscorer's Name : ") + highscore.name);
    log(chalk.green.bold("High Score : ") + highscore.score);
    if (score == highscore.score) {
        log(chalk.blue("\nCONGRATULATIONS!!") + chalk.yellow("You have beat the highscore!"));
        log("\nSend me a picture of the game! :)");
    }
};

welcome();
game();
showScore();