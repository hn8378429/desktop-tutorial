"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//BMI CALCULATOR USING INQUIRER PROMPT
const inquirer_1 = __importDefault(require("inquirer"));
const question = [
    { type: `number`, name: `weight`, message: `weight(kg):` },
    { type: `number`, name: `height`, message: `heigth(m):` },
];
const calculatorBMI = (weight, height) => weight / (height * height);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const { weight, height } = yield inquirer_1.default.prompt(question);
    console.log(`BMI: ${calculatorBMI(weight, height).toFixed(2)}`);
});
main();
