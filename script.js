var computerchoice = ["Rock", "Paper", "Scissors"]
function playfunc(playerchoice) {
//taking random input for computer
    const computer = computerchoice[Math.floor(Math.random() * 3)];
    if (computer == playerchoice) {
        result = "It's a tie!!";
    }
    else {
        switch (playerchoice) {
            case "Rock":
                result = (computer === "Scissors") ? "You win!!" : "You lose!!"
                break;
            case "Paper":
                result = (computer === "Rock") ? "You win!!" : "You lose!!"
                break;
            case "Scissors":
                result = (computer === "Paper") ? "You win!!" : "You lose!!"
                break;

        }


    }
    //PRINTING THE OUTPUTS
    document.getElementById("player").textContent =`PLAYER : ${ playerchoice}`
    document.getElementById("computer").textContent = `COMPUTER : ${computer}`
    document.getElementById("result").textContent = result
}
