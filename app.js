let boxes =  document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let newbtn = document.querySelector("#new-btn");
let container =  document.querySelector(".msg-container");
let msg =  document.querySelector("#msg");

let turn0 = true ; // playerx player0

const winningpatter = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const restargames = () =>{
    turn0 =  true;
    enablebox();
    msg-container.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turn0){
            box.innerText = "0";
            turn0=false;

        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const enablebox = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }   
}

const disablebox = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showwinner = (winner) =>{
    msg.innerText=`congratulation winner is ${winner}`;
    msg-container.classList.remove("hide");
    disablebox();
}

const checkwinner = () =>{
    for(pattern of winningpatter){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 &&pos2===pos3){
                console.log("winner",pos1)
                showwinner(pos1);
            }
        }
    }
}

newbtn.addEventListener("click",restargames);
resetbtn.addEventListener("click",restargames);