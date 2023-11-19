import { IterableCollection } from "./iterable";
import ArrayIterator from "./arrayIterator";

class NumbersCollection implements IterableCollection<number> {
  private numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  createIterator(): ArrayIterator<number> {
    return new ArrayIterator(this.numbers);
  }
}

export default NumbersCollection;
