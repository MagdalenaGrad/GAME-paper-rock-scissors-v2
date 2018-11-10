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
    else return "draw";
};
//result
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "You won!!!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Computer won!!!";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Nobody won...";
        document.querySelector('[data-summary="who-win"]').style.color = "blue";
    }
}

function endGame() {
    document.querySelector(`[data-option = "${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
}

//main func
function startGame() {
    if (!game.playerHand) return alert("Select hand!");
    // console.log(aiChoice());
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}

hands.forEach(hand => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);


//done as part of udemy course "Programowanie w JavaScript"