// Exercise #1: Decrease the Student Scores
let studentScores = [89, 70, 60, 50, 100, 71];

// Start coding here
let editedScore = [];

for (let i = 0; i < studentScores.length ; i++){
    studentScores[i] -= 10
    editedScore.push(studentScores[i])
}

console.log(editedScore)

