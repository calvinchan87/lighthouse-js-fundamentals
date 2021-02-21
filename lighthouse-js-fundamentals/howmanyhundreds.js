let bottles = 0;

function howManyHundreds(bottles) {
  let remainder = (bottles % 100);
  let containers = (bottles - remainder) / 100;
  return containers;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));