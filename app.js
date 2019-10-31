let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_img = document.getElementById("r");
const paper_img = document.getElementById("p");
const scissors_img = document.getElementById("s");
const lizard_img = document.getElementById("l");
const spock_img = document.getElementById("o");
const expandedGame_p = document.getElementById("expanded-game");
const expandIcons = document.getElementById("expand-icons");


let visibleGame = false;

const showExpandedGame = () => {
    if (visibleGame == false) {
        userScore = 0;
        computerScore = 0;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        expandIcons.classList.add("visible");
        expandedGame_p.textContent = "Traditional game";
        visibleGame =true
    }else {
        userScore = 0;
        computerScore = 0;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        expandIcons.classList.remove("visible");
        expandedGame_p.textContent = "Expanded game";
        visibleGame = false
    }
}

const computerNumber = () => {
    const choices = ["r", "p", "s", "l", "o"];
    let randomNumber = (Math.floor(Math.random()*5));
    let choice = choices[randomNumber];
 return choice;
}

const convertLetter = (letter) => {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    if (letter == "s") return "Scissors";
    if (letter == "l") return "Lizard";
    return "Spock";
}
const caseWin = (userChoice, computerChoice) => {
    const smallUserWord = "user".fontsize(3).sub().italics();
    const smallCompWord = "comp".fontsize(3).sub().italics();
    const userChoice_div = document.getElementById(userChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertLetter(userChoice)}${smallUserWord} vs. ${convertLetter(computerChoice)} ${smallCompWord} You Win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
};

const caseLose = (userChoice, computerChoice) => {
    const smallUserWord = "user".fontsize(3).sub().italics();
    const smallCompWord = "comp".fontsize(3).sub().italics();
    const userChoice_div = document.getElementById(userChoice);
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertLetter(userChoice)}${smallUserWord} vs. ${convertLetter(computerChoice)} ${smallCompWord} You Lost!`
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
};

const caseDraw = (userChoice, computerChoice) => {
    const smallUserWord = "user".fontsize(3).sub().italics();
    const smallCompWord = "comp".fontsize(3).sub().italics();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertLetter(userChoice)}${smallUserWord} vs. ${convertLetter(computerChoice)} ${smallCompWord} It's a draw`
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
};

const game = (userChoice) =>{
   const computerChoice = computerNumber();
   let finalChoices = userChoice + computerChoice;
   console.log(finalChoices);
   
switch ( userChoice + computerChoice ){
    case "rs":
    case "pr":
    case "sp":
    case "lo":
    case "os":
    case "rl":
    case "po":
    case "sl":
    case "lp":
    case "or":
        caseWin(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "so":
    case "lr":
    case "ol":
    case "ro":
    case "pl":
    case "sr":
    case "ls":
    case "op":
        caseLose(userChoice, computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "oo":
        caseDraw(userChoice, computerChoice);
    break;
}  
}

function main(){
    rock_img.addEventListener("click", () => game("r"));
    paper_img.addEventListener("click",() => game("p"));
    scissors_img.addEventListener("click", () => game("s"));
    lizard_img.addEventListener("click", () => game ("l"));
    spock_img.addEventListener("click", () => game("o"));
    expandedGame_p.addEventListener("click", () => { showExpandedGame() });
}
main();
