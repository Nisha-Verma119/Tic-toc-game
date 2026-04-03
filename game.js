let boxes = document.querySelectorAll(".box");
let restartBtn = document.querySelector("#restart-btn");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg") 

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

const restartGame = () =>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    newBtn.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;    

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
    const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    newBtn.classList.remove("hide");
    disableBoxes();
}
  
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newBtn.addEventListener("click",restartGame);
restartBtn.addEventListener("click",restartGame);

