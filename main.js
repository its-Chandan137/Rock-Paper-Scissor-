let circles = document.querySelectorAll('.circle');
let newgame_btn = document.querySelector('.newgame-btn');
let RPS = document.querySelector('.RPS');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let sissor = document.querySelector('.sissor');
let options = document.querySelectorAll('.opt');
let result = document.querySelector('.result');
let winnerOpt = document.querySelector('.winnerOpt');
let scores = document.querySelector('.scores');
let yourScore = document.querySelector('.you');
let myScore = document.querySelector('.me');
let start = document.querySelector('.start');

let x,bgcol,col;
let i=0,j=0;

start.addEventListener('click', () => {
    scores.style.transform = "scale(1)";
    sissor.style.transform = "scale(1)";
    rock.style.transform = "scale(1)";
    paper.style.transform = "scale(1)";
    start.style.transform = "scale(0)"
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            score();
    });
});
});


rock.addEventListener('click', () => {
    rock.style.transform = "translateX(140px)";
    paper.style.transform = "scale(0)"
    sissor.style.transform = "scale(0)"
});
paper.addEventListener('click', () => {
    rock.style.transform = "scale(0)";
    paper.style.transform = "scale(1)";
    sissor.style.transform = "scale(0)";
});
sissor.addEventListener('click', () => {
    rock.style.transform = "scale(0)";
    paper.style.transform = "scale(0)";
    sissor.style.transform = "translateX(-140px)";
});

const disableOption = () => {
    for(let circle of circles)
    {
        circle.disabled = true;
        console.log("Disabled...");
    };
};

const enableOption = () => {
    for(let circle of circles)
    {
        circle.classList.remove('losT')
        circle.classList.remove('draW')
        circle.classList.remove('wiN')
        circle.classList.remove('winnerOpt');
        circle.disabled = false;
        console.log("Enabled...");
    };
};

// imPortant part------------------------------------------------
circles.forEach(circle => {

    circle.addEventListener('mouseover', () => {
        circle.style.border = "2px solid white";
    });

    circle.addEventListener('mouseout', () => {
    circle.style.border = "none";
    });

    circle.addEventListener('click', () => {
        circle.classList.add('winnerOpt');
        RPS.style.transform = "scale(1)";
        newgame_btn.style.transform = "scale(1)";
        result.style.transform = "scale(1)";

        x = Math.random();
        console.log("Random val : " + x*10);
        RPS.innerText = x*10 < 5 ? dumb_Ai(circle) : Ai(circle);
        RPS.style.backgroundColor = `${bgcol}`;
        RPS.style.color = `${col}`;

        disableOption();
        findWinner(circle,RPS);
    });

});
//----------------------------------------------------------------

newgame_btn.addEventListener('mouseover', () => {
    newgame_btn.style.border = "2px solid black";
});

newgame_btn.addEventListener('mouseout', () => {
    newgame_btn.style.border = "none";
});

newgame_btn.addEventListener('click', () => {
    RPS.style.transform = "scale(0)";
    newgame_btn.style.transform = "scale(0)";
    result.style.transform = "scale(0)";

    paper.style.transform = "scale(1)"
    sissor.style.transform = "scale(1)"
    rock.style.transform = "scale(1)"
    enableOption();
});


function score(){
    yourScore.innerText = i;
    myScore.innerText = j;
}
//-----------------------------------random generated victory/win
function dumb_Ai(a) {
    if(x*10 < 2)
    {   
        col = "black"
        bgcol = "pink";
        return "Paper";
    }
    else if(x*10 < 4)
    {
        col = "black"
        bgcol = "silver";
        return "Sissor";
    }
    else if(x*10 < 6)
    {
        col = "white"
        bgcol = "black";
        return "Rock";
    }
}
//--------------------------------------impossible to win......
function Ai(a) {
    if(a.innerText == "Rock")
    {   
        col = "black"
        bgcol = "pink";
        return "Paper";
    }
    else if(a.innerText == "Paper")
    {
        col = "black"
        bgcol = "silver";
        return "Sissor";
    }
    else if(a.innerText == "Sissor")
    {
        col = "white"
        bgcol = "black";
        return "Rock";
    }
}

function findWinner(circle,RPS){
    let ii;
    if(circle.innerText == RPS.innerText)
    {
        // console.log("draw...")
        ii = 2;
        circle.classList.add('draW');
    }
    else if(circle.innerText == "Rock" && RPS.innerText == "Paper")
    {
        // console.log("Lost...")
        ii = 0;
        circle.classList.add('losT');
        // i -= 1;
        // j += 1;
    }
    else if(circle.innerText == "Rock" && RPS.innerText == "Sissor")
    {
        // console.log("Winn...")
        ii = 1;
        circle.classList.add('wiN');
        // i += 1;
        // j -= 1;
    }
    else if(circle.innerText == "Sissor" && RPS.innerText == "Paper")
    {
        // console.log("Winn...")
        ii = 1;
        circle.classList.add('wiN');
        // i += 1;
        // j -= 1;
    }
    else if(circle.innerText == "Sissor" && RPS.innerText == "Rock")
    {
        // console.log("Lost...")
        ii = 0;
        circle.classList.add('losT');
        // i -= 1;
        // j += 1;
    }
    else if(circle.innerText == "Paper" && RPS.innerText == "Rock")
    {
        // console.log("Winn...")
        ii = 1;
        circle.classList.add('wiN');
        // i += 1;
        // j -= 1;
    }
    else if(circle.innerText == "Paper" && RPS.innerText == "Sissor")
    {
        // console.log("Lost...")
        ii = 0;
        circle.classList.add('losT');
        // i -= 1;
        // j += 1;
    }
    showWinner(ii);
}

function showWinner(a){
    if(a == 2)
    {
        console.log("Draw " + a);
        result.style.backgroundColor = "grey";
        result.innerText = "Its A Draw";
    }
    else if(a == 0)
    {
        console.log("we Lostttt... " + a);
        result.style.backgroundColor = "Red";
        result.innerText = "You Lost";
        ++j;
        console.log("j = " + j);

    }
    else if(a == 1)
    {
        console.log("we Wonnnnnnn... " + a);
        result.style.backgroundColor = "green";
        result.innerText = "You Won!";
        ++i;
        console.log("i = " + i);
    }
}



// options.forEach(option => {
//     option.addEventListener('click', () => {
//         x = Math.random();
//         console.log("Random val : " + x*10);
//         RPS.innerText = x*10 < 5 ? dumb_Ai(option) : Ai(option);
//         RPS.style.backgroundColor = `${bgcol}`;
//         RPS.style.color = `${col}`;
//         // function findWinner(circle){
//         //     console.log(circle.innerText)
//         // }
//     });
// });

// function outcome(option) {
//     let oC,x = Math.random();
//     console.log(option.innerText)
//     console.log(x*10);
//     switch(parseInt(x*10)) {
//         case 1:
//             oC = "Rock";
//             break;
//         case 2:
//             oC = "Paper";
//             break;
//         case 3:
//             oC = "Sissor";
//             break;
//         case 4:
//             oC = "Rock";
//             break;
//         case 5:
//             oC = "Paper";
//             break;
//         case 6:
//             oC = "Sissor";
//             break;
//         default:
//             (option) => {
//                 if(option.innerText == "Rock")
//                 {   
//                     col = "black"
//                     bgcol = "pink";
//                     oC = "Paper";
//                 }
//                 else if(option.innerText == "Paper")
//                 {
//                     col = "black"
//                     bgcol = "silver";
//                     oC = "Sissor";
//                 }
//                 else if(option.innerText == "Sissor")
//                 {
//                     col = "white"
//                     bgcol = "black";
//                     oC = "Rock";
//                 }
//             }
//     }
//     console.log("oC value : " + oC);
//     return oC;
// }

// outcome();
