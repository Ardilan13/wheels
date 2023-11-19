"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayIterator {
    constructor(collection) {
        this.index = 0;
        this.collection = collection;
    }
    hasNext() {
        return this.index < this.collection.length;
    }
    next() {
        return this.collection[this.index++];
    }
}
exports.default = ArrayIterator;
