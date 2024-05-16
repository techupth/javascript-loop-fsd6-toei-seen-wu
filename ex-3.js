// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 1000];
let minScore = Infinity;

for (let i of studentScores) {
  if (i < minScore) {
    minScore = i;
  }
}

console.log(minScore);
