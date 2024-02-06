const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort Array
let sorted = ages.sort((x, y) => x - y);
console.log(`Array has sorted`, sorted);

// Find Min & Max
let minimum = ages[0];
console.log(`Minimum Age is`, minimum);
let maximum = ages[ages.length - 1];
console.log(`Maximum Age is`, maximum);

//Find Median
let medAge;
if (ages.length % 2 == 0) {
  let mid1 = ages[Math.floor(ages.length / 2) - 1];

  let mid2 = ages[Math.floor(ages.length / 2)];
  medAge = (mid1 + mid2) / 2;
} else {
  medAge = ages[Math.floor(ages.length / 2)];
}

console.log(`Median Age `, medAge);

//Find Average
let sumOfAges = ages.reduce((sum, age) => sum + age, 0);
let averageAge = sumOfAges / ages.length;
console.log(`Average Age`,averageAge);

//find range
let ageRange = maximum - minimum;
console.log(`Age Range`,ageRange);

const minDif = Math.abs(minimum - averageAge);
console.log(`Minimum Differnce `, minDif);
const maxDif = Math.abs(maximum - averageAge);
console.log(`Maximum Differnce `, maxDif);
