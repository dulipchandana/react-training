const numbers = [1,2,3];

const newNumbers = [numbers,4]

console.log(newNumbers)

//spred operator 

// spread operator with objects 


const person = {
  name: 'Max'
};


const newPerson = {
  ...person,
  age: 28  
}

console.log (newPerson);
// spread operator for function 

const filter = (...args) => {
  return args.filter(el => el === 1)
}
console.log(filter(...numbers));
