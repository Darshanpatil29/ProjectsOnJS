const randomColor=()=>{
    const hex="0123456789ABCDEF"
    let color="#"
    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let interval;
document.querySelector('#start').addEventListener('click',()=>{
    const changeColor=()=>{
        document.body.style.backgroundColor=randomColor()
    }
    interval=setInterval(changeColor,1700);
});
document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(interval);
})