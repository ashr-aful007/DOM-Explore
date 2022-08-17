//step number 1; add Event handler diposit button
const dipositeInputBtn = document.getElementById('diposite-btn').addEventListener('click', function(){
     //step-2: get the deposit amount from the input fild
     //For input field use .value to the value inside the input fild
     const dipositInput = document.getElementById('diposit-input');
     const newdipositeAmount = dipositInput.value;
     const newDepositeAmountNumber = parseFloat(newdipositeAmount);
     
     //step-3: get the deposit total
     //for non input tag use innerText to get the text
     const dipositTotalElement = document.getElementById('diposit-total');
     const previousdipositTotal = dipositTotalElement.innerText;
     const previousdipositTotalNumber = parseFloat(previousdipositTotal);
     
     //step-4: add numbers to set the total deposite
     const currentdipositeTotal = previousdipositTotalNumber  + newDepositeAmountNumber;
     //set the dipositTotal
     dipositTotalElement.innerText = currentdipositeTotal;

     //step-5: get balence current total
     const balanceTotalElement = document.getElementById('balance-total');
     const previousTotalBlanceString = balanceTotalElement.innerText;
     const previousBlanceTotal = parseFloat(previousTotalBlanceString);

     //calculate current total balence
     const currentBlanceTotal = previousBlanceTotal + newDepositeAmountNumber;

     //set the balence total
     balanceTotalElement.innerText = currentBlanceTotal;
     //step:-7 , clear the diposit field
     dipositInput.value = '';
})