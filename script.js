const inputBox = document.querySelector("#myInput");
const numberSpan= document.querySelector('.number span');
const resetBox=document.querySelector('.resetbox');
const minusBox=document.querySelector('.minusbox')
const plusBox=document.querySelector('.plusbox')


minusBox.addEventListener('click',()=>{
    
    let currentnumber = parseInt(numberSpan.textContent) || 0;
    let ipstep = parseInt(inputBox.value) || 1;
    let difference = currentnumber - ipstep;
    numberSpan.textContent = difference;
})

plusBox.addEventListener('click',()=>{

    let currentnumber = parseInt(numberSpan.textContent) || 0;
    let ipstep = parseInt(inputBox.value) || 1;
    let sum = currentnumber + ipstep;
    numberSpan.textContent = sum;
})


resetBox.addEventListener('click',()=>{
    
 numberSpan.textContent = 0;

})































    
