//
// Object Destructuring
//

// const person = {
//   name: 'Adrian',
//   age: 33,
//   location: {
//     city: 'Philly',
//     temp: 92
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147'
];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.75'];

const [drink, small, medium, large] = item;

console.log(`A medium ${drink} costs ${medium}`);
