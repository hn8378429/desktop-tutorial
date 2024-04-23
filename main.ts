//BMI CALCULATOR USING INQUIRER PROMPT
import inquirer from "inquirer";

const question = [
{type: `number`, name: `weight`, message: `weight(kg):`},
{type: `number`, name: `height`, message: `heigth(m):`},
];

const calculatorBMI= (weight : number, height: number): number =>  weight/(height*height);

const main = async() => {
const {weight,height} = await inquirer.prompt(question);

console.log(`BMI: ${calculatorBMI(weight,height).toFixed(2)}`)
};

main();