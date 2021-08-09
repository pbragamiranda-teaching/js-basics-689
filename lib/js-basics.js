console.log("Hello Batch 689");


// old way
// var name = "Pedro"

// let allows reassingment
let name = "Pedro"
name = "Miranda"

// console.log(name);

// do NOT allows reassigment
// const name = "Pedro"

const first = "Carlos"
const last = "Machado"

// interpolation
// console.log(`${first.toUpperCase()} ${last.toUpperCase()}`);



const fruits = ['banana']

// CRUD

// C
fruits.push('orange')

// R
fruits[0]

// U
fruits[0] = 'watermelon'

// D
fruits.splice(0, 1)

const beatles = ['Ringo', 'John', 'Paul', 'George']


// beatles.forEach((beatle) => {
//   console.log(beatle)
// });


const age = 20;

// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You can't vote");
// }

// if (condition) {
//   code_if_true
// } else {
//   code_if_false
// }

const variable = '0'

// if (variable === 0) {
//   console.log('Im zero')
// } else {
//   console.log('Im not zero')
// }



const square = (x) => {
  return x * x;
};

const square_sum = (x, y) => {
  let crazy_sum = square(x) + square(y)
  return crazy_sum;
};

// console.log(square(3))
// console.log(sum(16, 3))
console.log(square_sum(3, 2))

// const nameOfFunction = (parameters) => {
//   code;
//   return something;
// }
