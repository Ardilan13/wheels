import Numbers from "./clases/numbers";

const numbers = [1, 2, 3, 4, 5];
const number = new Numbers(numbers);
const iterator = number.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
