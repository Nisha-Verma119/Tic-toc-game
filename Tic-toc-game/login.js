let btn = document.querySelector("#show-model");
let model = document.querySelector(".model");
let closebtn = document.querySelector(".model span");


btn.addEventListener("click",()=>{

    model.style.top = "50%"
});

closebtn.addEventListener("click",()=>{
    model.style.top = "-1000px"
})