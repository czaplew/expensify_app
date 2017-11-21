// const book = {
//   title: 'Ego is the Enemy',
//   author:'Ryan Holiday',
//   publisher: {
//     name: 'Penquin'
//   }
// };
//
//
//
// const {name:publisherName='selfPublisher'} = book.publisher;
// console.log(publisherName); //Penquin


// Arrays destructuring
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//
// const [city,street,state] = address;
//
// console.log(`You are in ${city} ${street}.`)
const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];
const [itemName,,medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);
