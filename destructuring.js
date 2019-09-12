//Easily extract array elements or object properties and store them in variable 

//Array Destructuring

const numbers = [1,2,3];

[num1,num2] = numbers;

console.log(num1,num2);



//object Destructuring

const pearson = {
  name: 'Max'
};

const secondPeraon = {
  ...pearson
  //used the spread operator 
};

console.log(secondPeraon);

//Array functions

const numbers = [1,2,3];

const doubleNUmArray = numbers.map((num) => {
  return num * 2 ;
});

console.log(numbers);

console.log(doubleNUmArray);


