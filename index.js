const displayResult = document.getElementById("result");
const displayScores = document.querySelector(".scores");
const displayResult_Text = document.querySelector("h1");
const displayFinalresult = document.querySelector(".finalResult");

const displayYou = document.querySelector(".you");
const displayComputer = document.querySelector(".computer");
const displayAllDraw = document.querySelector(".alldraw") ;
const displayRound = document.getElementById("Roundno");

const br = document.createElement("br"); 

let you = 0;
let computer = 0;
let draw = 0;
let choices = ["rock", "paper", "scissors"];
let totalRound = 0;
let currentRound = 0;

function play(playerChoice){
    smallRefresh();
    const matchToPlayEx = document.querySelector("input").value;
    const matchToPlay = Number(matchToPlayEx);
    totalRound = matchToPlay;
    if(matchToPlay <= 0){
        displayError();
    }else{
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        if(playerChoice === computerChoice){
            currentRound++;
            displayRound.textContent = `Round: ${currentRound}`;
            displayDraw(playerChoice);
            if(currentRound === matchToPlay){
                const btnFinalResult = document.createElement("button");
                btnFinalResult.textContent = "Final Result ->";
                btnFinalResult.onclick = displayFinalResult;
                displayResult.appendChild(btnFinalResult);
                disableImgOnClick();
            }
        }else{
            switch(playerChoice){
                case "rock":
                    (computerChoice === "scissors") ? displayWin("rock","scissors") : displayLose("rock","paper");
                    break;
                case "paper":
                    (computerChoice === "rock") ? displayWin("paper","rock") : displayLose("paper","scissors");
                    break;
                case "scissors":
                    (computerChoice === "paper") ? displayWin("scissors","paper") : displayLose("scissors","rock");
                    break;
            }
            currentRound++;
            displayRound.textContent = `Round: ${currentRound}`;
            if(currentRound === matchToPlay){
                const btnFinalResult = document.createElement("button");
                btnFinalResult.textContent = "Final Result ->";
                btnFinalResult.onclick = displayFinalResult;
                displayResult.appendChild(btnFinalResult);
                disableImgOnClick()
            }
        }
    } 
}

function smallRefresh(){
    displayResult.innerHTML = ""; // Remove every elements under displayResult.
    displayResult.style.display = "none";
    displayScores.style.display = "block";
    displayResult.classList.remove("win_Result");
    displayResult.classList.remove("lose_Result");
    displayResult.classList.remove("draw_Result");
    displayResult.classList.remove("error_Result");
}

function disableImgOnClick(){
    const onclickImg1 = document.querySelectorAll(".rps_area img");
    onclickImg1.forEach(elements => {
        elements.onclick = "";
    })
}

function enableImgOnClick(){
    const onclickImg2 = document.querySelectorAll(".rps_area img");
    onclickImg2[0].onclick = () => {
        play('rock');
    }
    onclickImg2[1].onclick = () => {
        play('paper');
    }
    onclickImg2[2].onclick = () => {
        play('scissors');
    }
}

function displayWin(player,computer){
    you++;
    displayYou.textContent = `You: ${you}`;

    const h1Win = document.createElement("h1");
    const spanYouWin = document.createElement("span");
    const imgYouWin = document.createElement("img");
    const spanComputerWin = document.createElement("span");
    const imgComputerWin = document.createElement("img");

    h1Win.textContent = "You Win";
    spanYouWin.textContent = "You: ";
    imgYouWin.src = `img/${player}.png`;
    spanComputerWin.textContent = "Computer: ";
    imgComputerWin.src = `img/${computer}.png`;

    displayResult.style.display = "block";
    displayResult.classList.add("win_Result");
    displayResult.appendChild(h1Win);
    displayResult.appendChild(spanYouWin);
    displayResult.appendChild(imgYouWin);
    displayResult.appendChild(br);
    displayResult.appendChild(spanComputerWin);
    displayResult.appendChild(imgComputerWin);
}

function displayLose(player2,computer2){
    computer++;
    displayComputer.textContent = `Computer: ${computer}`;

    const h1Lose = document.createElement("h1");
    const spanYouLose = document.createElement("span");
    const imgYouLose = document.createElement("img");
    const spanComputerLose = document.createElement("span");
    const imgComputerLose = document.createElement("img");

    h1Lose.textContent = "You Lose";
    spanYouLose.textContent = "You: ";
    imgYouLose.src = `img/${player2}.png`;
    spanComputerLose.textContent = "Computer: ";
    imgComputerLose.src = `img/${computer2}.png`;

    displayResult.style.display = "block";
    displayResult.classList.add("lose_Result");
    displayResult.appendChild(h1Lose);
    displayResult.appendChild(spanYouLose);
    displayResult.appendChild(imgYouLose);
    displayResult.appendChild(br);
    displayResult.appendChild(spanComputerLose);
    displayResult.appendChild(imgComputerLose);
}

function displayDraw(superDraw){
    draw++;
    displayAllDraw.textContent = `Draw: ${draw}`;

    const h1Draw = document.createElement("h1");
    const spanYouDraw = document.createElement("span");
    const imgYouDraw = document.createElement("img");
    const spanComputerDraw = document.createElement("span");
    const imgComputerDraw = document.createElement("img");

    h1Draw.textContent = "Draw";
    spanYouDraw.textContent = "You: ";
    imgYouDraw.src = `img/${superDraw}.png`;
    spanComputerDraw.textContent = "Computer: ";
    imgComputerDraw.src = `img/${superDraw}.png`;

    displayResult.style.display = "block";
    displayResult.classList.add("draw_Result");
    displayResult.appendChild(h1Draw);
    displayResult.appendChild(spanYouDraw);
    displayResult.appendChild(imgYouDraw);
    displayResult.appendChild(br);
    displayResult.appendChild(spanComputerDraw);
    displayResult.appendChild(imgComputerDraw);
}

function displayError(){
    displayResult.style.display = "block";
    displayResult.classList.add("error_Result");

    const h1Error = document.createElement("h1");
    h1Error.textContent = "Error";
    displayResult.appendChild(h1Error);
}

function displayFinalResult(){
    displayScores.style.display = "none";
    displayResult.style.display = "none";

    const h1Final = document.createElement("h1");
    const pFinal1 = document.createElement("p");
    const pFinal2 = document.createElement("p");
    const pFinal3 = document.createElement("p");
    const pFinal4 = document.createElement("p");
    displayFinalresult.style.display = "block";

    if (you > computer){
        h1Final.textContent = "YOU WON !!";
        displayFinalresult.classList.add("win");

    }else if(you < computer){
        h1Final.textContent = "YOU LOSE !!";
        displayFinalresult.classList.add("lose");

    }else{
        h1Final.textContent = "DRAW !!";
        displayFinalresult.classList.add("draw");
    }
    pFinal1.textContent = `Best of: ${totalRound}`;
    pFinal2.textContent = `You Score: ${you}`;
    pFinal3.textContent = `Computer Score: ${computer}`;
    pFinal4.textContent = `Draw: ${draw}`;

    displayFinalresult.appendChild(h1Final);
    displayFinalresult.appendChild(pFinal1);
    displayFinalresult.appendChild(pFinal2);
    displayFinalresult.appendChild(pFinal3);
    displayFinalresult.appendChild(pFinal4);
}

function restartGame(){
    you = 0;
    computer = 0;
    draw = 0;
    totalRound = 0;
    currentRound = 0;

    displayFinalresult.classList.remove("win");
    displayFinalresult.classList.remove("lose");
    displayFinalresult.classList.remove("draw");

    displayFinalresult.innerHTML = "";
    displayFinalresult.style.display = "none";
    displayResult.style.display = "none";
    displayScores.style.display = "block";

    displayYou.textContent = `You: ${you}`;
    displayComputer.textContent = `Computer: ${computer}`;
    displayAllDraw.textContent = `Draw: ${draw}`;
    displayRound.textContent = `Round: ${currentRound}`;

    enableImgOnClick()
}

