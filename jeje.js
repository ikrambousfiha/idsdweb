let i=0;
let n=prompt("donnerle nombre de div:");
n=Number.parseInt(n)
let str=`<div class="mydiv  active"> ${i+1}</div>`
for(i=1;i<n;i++){
str+=`<div class="mydiv "> ${i+1}</div>`
}
document.body.innerHTML=str;
let element=document.querySelectorAll(".mydiv");
i=0
setInterval (()=>{
    element[i].classList.toggle("active")
    i=i+1
    i=i%n;
    element[i].classList.toggle("active")
 },1000);