// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
};

const game = {
    playerHand: "",
    aiHand: "",
};

const hands = [...document.querySelectorAll(".select img")];

//First function

function handSelection() {
    game.playerHand = this.dataset.option;
    //dataset.cośTam pobiera info z atrybutu data(który sami tworzymy w HTML)

    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 2px yellow";
};

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai) {
    console.log(`player chose ${player}`);
    console.log(`ai chose ${ai}`);

    if (player == ai) return "draw"
    else if ((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper")) return "win"
    else if ((player === "paper" && ai === "scissors") || (player === "rock" && ai === "paper") || (player === "scissors" && ai === "rock")) return "loss"
    else return "draw"

};

function startGame() {
    if (!game.playerHand) return alert("Select hand!");
    // console.log(aiChoice());
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);

}

hands.forEach(hand => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);


//done with udemy - webSamuraj