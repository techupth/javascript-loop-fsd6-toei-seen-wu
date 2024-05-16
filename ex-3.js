// Exercise #3: Find a Minimum Score
let studentScores = [100, 20, 3, 1000];
let minScore = 0;
// Start coding here

for (let i = 0; i < studentScores.length ; i++){
    if (studentScores[i] < studentScores[0]){
        minScore = studentScores[i]
    }
}

console.log(minScore);


