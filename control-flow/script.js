// if else, else if, switch case, early return 

// 1. IF ELSE 
// const userLogged = true;
// if (userLogged){
//     console.log("user loggedIn");
// }
// else{
//     console.log("Signup");
// }

// 2. ELSE IF
function getGrade(score){
    if (score >= 90 && score <= 100){
        return "A";
    }
    else if (score >= 80 && score < 90){
        return "B";
    }
    else if (score >= 70 && score < 80){
        return "C";
    }
    else if (score >= 60 && score < 70){
        return "D";
    }
    else if (score >= 50 && score < 60){
        return "E";
    }
    else if (score >= 0 && score < 50){
        return "Fail"
    }
    else {
        return "Invalid Marks";
    }
} 
// console.log(getGrade(34));
// console.log(getGrade(-7));

// 3. SWITCH CASE 
// const day =  3;
// switch(day){
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 : 
//         console.log("Tuesday");
//         break;
//     case 3 :
//         console.log("Wednesday");
//         break;
//     case 4 :
//         console.log("Thursday");
//         break;
//     case 5 :
//         console.log("Friday");
//         break;
//     case 6 :
//         console.log("Saturday");
//         break;
//     case 7 :
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");

// }
// 4. EARLY RETURN 
// function getVal(val){
//     if (val < 20) return "D";
//     if (val < 50) return "C";
//     if (val < 75) return "B";
//     else return "A";
// }
// console.log(getVal(76));

// ROCK PAPER SCISSORS LOGIC 
function rps(user, computer){
    if (user === computer) return "Draw";

    if (user === "rock" && computer === "scissor") return "user win";
    if (user === "scissor" && computer === "paper") return "user win";
    if (user === "paper" && computer === "rock") return "user win";

    return "Computer";


}
console.log(rps("rock", "scissor"));