let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".choise1");
let gemcomp = () => {
    const op = ["rock", "paper", "scissors"];
    return op[Math.floor(Math.random() * 3)];
};
let playgame = (userchoice) => {
    console.log("User choice:", userchoice);
    const computerchoice = gemcomp();
    console.log("Computer choice:", computerchoice);

    let result;
    if (userchoice === computerchoice) {
        result = "It's a tie!";
    } else if (
        (userchoice === "rock" && computerchoice === "scissors") ||
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "scissors" && computerchoice === "paper")
    ) {
        userscore++;
        document.getElementById("user1").innerText = userscore;
        result = "You win!";
    } else {
        computerscore++;
        document.getElementById("com").innerText = computerscore;
        result = "Computer wins!";
    }

    document.getElementById("msg").textContent = result;
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        console.log("Clicked:", userchoice);
        playgame(userchoice);
    });
});