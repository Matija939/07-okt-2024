const hourEL = document.getElementById("hours");
const minuteEL = document. getElementById("minutes");
const secondEL = document.getElementById("seconds");
const ampmEL = document. getElementById("ampm");

updateClock();
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let a = "AM;"

if(h > 12){
   a = "PM"
}

/* if(s< 10) {
    h = "0" + h;
} */

// Conditional Operator Eller Ternary Operator 
h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;


/* if(m< 10){
    m = "0" + m;
}
 
if(s< 10){
    s = "0" + s;
}
*/
hourEL.innerText = h;
minuteEL.innerText = m;
secondEL.innerText = s;
ampmEL.innerText = a;

// event
setTimeout(() => {
updateClock();
}, 1000);

}


