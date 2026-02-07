const games = [
    {name : "Number Guessing Game"},
    {name : "Rock Paper Scissors"},
    {name : "Click Counter with Timer"},
    {name : "Memory Card Match (2x2)"},
    {name : "Quiz Game"},
    {name : "Tic Tac Toe"},
    {name : "Whack-a-Mole"},
    {name : "Snake Game (Simple Grid)"},
    {name : "Brick Breaker (Basic)"},
    {name : "Mini Game Hub"},
];

const parentContainer = document.getElementById("game-container");

for (var i = 0; i<10; i++){
    const newDiv = document.createElement("button");
    newDiv.innerText = games[i].name;
    newDiv.id = `game-${i+1}`;
    newDiv.addEventListener('click', () => {
    window.location.href = 'games/game1.html'; 
});
    newDiv.classList.add("box-1");
    if (parentContainer) {
        parentContainer.appendChild(newDiv);
    } else {
        console.error("Parent container not found!");
    }
    newDiv.offsetHeight;
    newDiv.style.animationDelay = `${i * 0.2}s`;
    newDiv.classList.add("animate");
}

get