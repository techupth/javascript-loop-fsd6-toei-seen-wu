// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here

// for (let i = 0; i < companyName.length ; i++){
//     console.log(`Number ${(i+1)} character is ${companyName[i]} `)
// }

for (let char in companyName){
    console.log(`Number ${(Number(char)+1)} character is ${companyName[char]} `)
}