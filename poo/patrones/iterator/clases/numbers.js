"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrayIterator_1 = __importDefault(require("./arrayIterator"));
class NumbersCollection {
    constructor(numbers) {
        this.numbers = numbers;
    }
    createIterator() {
        return new arrayIterator_1.default(this.numbers);
    }
}
exports.default = NumbersCollection;
