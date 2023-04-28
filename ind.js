function color(z){
let a = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let color = [];
for(let i=0 ; i<6 ; i++){
    color.push(a[Math.floor(Math.random() * a.length )]);
}
let fincolor = `#${color.join("")}`;
document.body.style.backgroundColor = fincolor;
}
