 const clickImage = document.querySelector("#container");
 let  Icone = document.querySelector("i");
//  let check = 0;
 clickImage.addEventListener("dblclick", ()=>{
    Icone.style.transform = "translate(-50%, -50%) scale(1)";
    Icone.style.opacity = 0.8;
    setTimeout(()=>{
        Icone.style.opacity = 0;
        
    },1000)
    setTimeout(()=>{
        Icone.style.transform = "translate(-50%, -50%) scale(0)";
        
    },2000)
 })









