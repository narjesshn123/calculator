const display = document.querySelector(".display")
       
const keyes = document.querySelectorAll(".show-display");      
console.log(display);
keyes.forEach(item => {
    item.addEventListener("click", calculators); 
}) 
          

function calculators(event){
    const x =  event.target.innerText;      
    if(display.innerText == 0){
      return display.innerText = x;         
    }
    return display.innerText += x;
}

const equal = document.querySelector(".calculate");
equal.addEventListener("click", calEqual);
function calEqual(){
  let result = display.innerText;       
  display.innerText = eval(result);
}         
const clearLast = document.querySelector(".clear-last"); 
console.log(clearLast)          
clearLast.addEventListener("click", calClear);          

function calClear(){
  const calLastClear = display.innerText;         
  if(calLastClear.length === 1){
    display.innerText = 0
  }
  else{
    display.innerText = calLastClear.substring(0, calLastClear.length-1)
  }
}

const allClear = document.querySelector(".all-clear");                   
allClear.addEventListener("click", calAllClear);        

function calAllClear(){
  display.innerText = 0;        
}