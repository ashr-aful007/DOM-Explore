//function for get inputFild Value
function getValueInputFild(InputId){
   const inputValueFild = document.getElementById(InputId);
   const inputValueString = inputValueFild.value;
   const inputValue = parseFloat(inputValueString);
   inputValueFild.value = '';
   return inputValue;
}

//function for get priveous amount value
function getElementValue(elementId){
     const elementValue = document.getElementById(elementId);
     const elementValueString = elementValue.innerText;
     const elementAmount = parseFloat(elementValueString);
     return elementAmount;
}

//add and update value function
function setAndUpdateValue(elementId, newValue){
    const setValue = document.getElementById(elementId);
    setValue.innerText = newValue;
}
