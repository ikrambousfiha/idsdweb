let m=document.querySelector("#min-hand")
let h=document.querySelector("#hour-hand")
let s=document.querySelector("#second-hand")
let min=0;
let hour=0;
let second=0;
function update(){
    s.setAttribute("transfor",`rotate(${second})`)
    m.setAttribute("transform",`rotate(${min})`)
    h.setAttribute("trasnform",`rotate(${hour})`)
    second+=360/60;
    second=min%360;
    min+=360/60;
    hour+=360/(12*3600);
    hour=hour%360;
}
let interval=setInterval(update,1000)