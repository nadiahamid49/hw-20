window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI)
}
function calculateBMI (){
    let height = parseInt(document.querySelector ("#height").value);
    let weight = parseInt(document.querySelector ("#weight").value);
    let result = document.querySelector ("#result");
     
    if(height === "" || isNaN(height))
    result.innerHTML = "provide a valid height"
   else if(weight === "" || isNaN(weight))
    result.innerHTML = "provide a valid weight"
   else{
    let bmi = (weight / (( height * height) / 1000)).toFixed(2);

    if(bmi < 18.6 ) result.innerHTML = 
   `under weight : <span>${bmi}</span>`
   else if (bmi >= 18.6 && bmi < 24.9)
   result.innerHTML = `normal : <span>${bmi}</span>`
   else result.innerHTML = 
   `over weight : <span>${bmi}</span>`
   }
}
