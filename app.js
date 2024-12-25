const box =  document.querySelectorAll(".box");
const resetBtn = document.querySelector(".resetBtn");
const newBtn = document.querySelector(".newBtn");
let msgCon = document.querySelector(".msgCont")
let msg = document.querySelector(".msg")

let turnX = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

const resetGame= () => {
    turnX=true;
    enableBoxes();
    msgCon.classList.add("hide");
}

box.forEach((b) => {
    b.addEventListener("click", () => {
       if(turnX) {
        b.innerText = "X";
        turnX = false ;
       }
       else {
        b.innerText = "0";
        turnX = true ;
       }
       b.disabled = true;

       checkWinner();
    });
});
const disableBoxes = () => {
    box.forEach((b) => {
        b.style.pointerEvents = "none";
      })
};

const enableBoxes = () => {
    box.forEach((b) => {
        b.style.pointerEvents ="auto";
        b.innerText = "";
        b.disabled = false;
      })
};


const showWinner =  (winner) => {
    msg.innerText = `Congconglaturation ! Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let patterns  of winPatterns) {
           let value1 = box[patterns[0]].innerText;
           let value2 = box[patterns[1]].innerText;
           let value3 = box[patterns[2]].innerText
    
        

        if (value1 != "" && value2 != "" && value3 !="") {
            if(value1 === value2 && value1 === value3) {
                console.log("winner");

                showWinner(value1);
            }
        }
    }
}

// Event listener for the "New Game" button
newBtn.addEventListener("click", resetGame);

// Event listener for the "Reset" button
resetBtn.addEventListener("click", resetGame);


