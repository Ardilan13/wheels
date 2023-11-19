"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const numbers_1 = __importDefault(require("./clases/numbers"));
const numbers = [1, 2, 3, 4, 5];
const number = new numbers_1.default(numbers);
const iterator = number.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
