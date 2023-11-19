import { Iterator } from "./iterator";

class ArrayIterator<T> implements Iterator<T> {
  private collection: T[];
  private index: number = 0;

  constructor(collection: T[]) {
    this.collection = collection;
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }

  next(): T {
    return this.collection[this.index++];
  }
}

export default ArrayIterator;
