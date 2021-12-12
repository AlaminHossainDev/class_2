//ssc & Hsc resulting system GPA

let name = prompt('Please Enter Your Name:');
let boardName = prompt('Please Enter Your Board Name:');
let rollNumber = prompt('Please Enter Your Roll Number: ');
let marks = prompt('Please Enter Your Average Marks');

if( marks > 0 && marks <=32 ){
console.log(`Hello ${name}, You are Fail`)
}
else if( marks >= 33 && marks <= 39){
    console.log(`    Hello ${name}, You are Passed
    Borad Name       : ${boardName}
    Total marks      : ${marks}
    Roll Number      : ${rollNumber}
    Your GPA         : 1
    Your Grade Point : D`)
}
else if( marks >= 40 && marks <= 49){
    console.log(`    Hello ${name}, You are Passed
    Borad Name       : ${boardName}
    Total marks      : ${marks}
    Roll Number      : ${rollNumber}
    Your GPA         : 2
    Your Grade Point : C`)
}
else if( marks >= 49 && marks <= 59){
    console.log(`    Hello ${name}, You are Passed
    Borad Name       : ${boardName}
    Total marks      : ${marks}
    Roll Number      : ${rollNumber}
    Your GPA         : 3
    Your Grade Point : B`)
}
else if( marks >= 60 && marks <= 69){
    console.log(`    Hello ${name}, You are Passed
    Borad Name       : ${boardName}
    Total marks      : ${marks}
    Roll Number      : ${rollNumber}
    Your GPA         : 3.5
    Your Grade Point : A-`)
}
else if( marks >= 70 && marks <= 79){
    console.log(`    Hello ${name}, You are Passed
    Borad Name       : ${boardName}
    Total marks      : ${marks}
    Roll Number      : ${rollNumber}
    Your GPA         : 4
    Your Grade Point : A`)
}
else if( marks >= 80 && marks <= 100){
    console.log(`    Hello ${name}, You are Passed
    Borad Name       : ${boardName}
    Total marks      : ${marks}
    Roll Number      : ${rollNumber}
    Your GPA         : 5
    Your Grade Point : A+`)
}
else{
    console.log(`Hello ${name}, apni kono Exam den ni, ekhana esa mittha bolsen`)
}


