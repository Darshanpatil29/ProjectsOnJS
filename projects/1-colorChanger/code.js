const buttons=document.querySelectorAll('.button')
const body=document.body
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor="grey"
                break;
            case 'white':
                body.style.backgroundColor=e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor=e.target.id
                break;
            case 'blue':
                body.style.backgroundColor="blue"
                break;
            default:
                body.style.backgroundColor="white"
                break;
        }
    })
});