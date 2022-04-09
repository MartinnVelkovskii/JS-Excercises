
let numbers = [1, 1];
while (numbers[numbers.length - 1] + numbers[numbers.length - 2] < 500) {
  numbers[numbers.length] = numbers[numbers.length - 1] + numbers[numbers.length - 2];
}
console.log(numbers);
