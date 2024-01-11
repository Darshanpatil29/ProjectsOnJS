const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results')

    if(height===''||height<0||isNaN(height)){
        result.innerHTML="please enter valid Height"
    }
    else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML="please enter valid weight"
    }
    else{
        const BMI=(weight / ((height * height)/10000)).toFixed(2);
        // const bmi=document.querySelector("#bmi")
        // bmi.
        if(BMI<18.6){
            result.innerHTML=`<span>BMI is : ${BMI}</span><p> You are Under Weight</p>`
        }
        else if(BMI>24.9){
            result.innerHTML=`<span>BMI is : ${BMI}</span><p> You are Overweight</p>`
        }
        else{
            result.innerHTML=`<span>BMI is : ${BMI}</span>`+`<br><span> You are Fit </span>`
        }
    }
})
