let uniqueNum = new Set([2, 2, 5, 5, 4, 3, 5, 7]);

let squreNum = new Map();

uniqueNum.forEach((number) => {
  squreNum.set(number, number * number);
});

squreNum.forEach((number, sqr) => {
  console.log(`  ${sqr}  ${number} `);
});
