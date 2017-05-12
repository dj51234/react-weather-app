// function getTemp(cityName, func) {
//   func(undefined,78);
//   func('city not found');
// }

// getTemp('New York', (err, temp) => {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// function getTemp(cityName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(75);
//       reject('City not found');
//     },2000)
//   })
// }
//
// getTemp('New York').then((temp) => {
//   console.log('success', temp)
// }).catch((err) => console.log(err));

function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a and b should both be numbers');
    }
  })
}

addPromise('', 4).then((sum) => {
  console.log(sum)
}).catch((err) => {
  console.log('Error:', err)
})