function findOdd(A: number[]) {
  let res: number[][] = [];
  let unique = Array.from(new Set(A));

  for (let u = 0; u < unique.length; u++) {
    res.push(A.filter((num) => num === unique[u]));
  }

  return res.filter((arr) => arr.length % 2 !== 0)[0][0];
}

console.log(findOdd([7, 1, 1, 3]));
