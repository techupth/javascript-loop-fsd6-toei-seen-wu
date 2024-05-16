// Exercise #6: Reverse the String
let companyName = "TechUp Thailadn";
let reversedCompanyName = "";

for (let i = companyName.length; i > 0; i--) {
  reversedCompanyName += companyName[i - 1];
}

console.log(companyName.length);
console.log(reversedCompanyName);
