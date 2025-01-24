function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct
let result2 = add(1, parseInt('2'));//Correct way to pass string and convert to number
console.log(result); // Output: 3
console.log(result2); // Output: 3