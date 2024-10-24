// TASK : Practice on conditional statements

// if condition statements
// __________________________________________________________________________
let age = parseInt(prompt("Enter your age : "))
if(age < 18){
    console.log("You can't ride on bike...");
    console.log("You are not eligible to cast your vote..");
}

// else condition statements
//___________________________________________________________________________
else{
    console.log("You can ride a bike");
    console.log("You are elegible to cast your vote..");
}


// else if conditional satements
// __________________________________________________________________________
let marks = Number(prompt("Enter marks : "));
if(marks > 90){
    console.log("A grade");
}
else if(marks > 80 && marks <= 90){
    console.log("B grade");
}
else if(marks > 70 && marks <=80){
    console.log("C grade");
}

else if(marks > 60 && marks <=70){
    console.log("D grade");
}
else{
    console.log("F grade");
}



// Switch Statements
// __________________________________________________________________________
let day = Number(prompt("Enter day no: "))
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}
