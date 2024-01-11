setInterval(() => {
mydate=new Date();
time=mydate.toLocaleTimeString();
const clock=document.getElementById('clock');
clock.innerHTML=`<span>${time}</span>`
}, 1000);