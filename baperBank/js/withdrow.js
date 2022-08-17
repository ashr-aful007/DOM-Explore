/**
 * 1| add event handler with the withdraw button
 * 2|get the withdraw amount from the input field
 * 2.5| also make sure to convert the input into a number by using parseFloat
 * 3| get previous withdraw total 
 * 4| calculate total withdraw amount
 * 4.5| set total withdraw amount
 * 5| get the prevous balance total
 * 6.5| set the new blance total
 * 7.clear the input field
 */


//step:-1 
document.getElementById('withdraw-btn').addEventListener('click', function(){
     //step:-2
    const withdrawFildAmount = document.getElementById('withdraw-fild');
   const withdrawValueSting = withdrawFildAmount.value;
   const withdrawValue = parseFloat(withdrawValueSting);
     //step:-7
     withdrawFildAmount.value ='';

   if(isNaN(withdrawValue)){
    alert('please provide a valid number');
    return
   }

   //step:-3
   const previousWithdraw = document.getElementById('previous-withdraw');
   const previousAmountString = previousWithdraw.innerText;
   const previousAmount = parseFloat(previousAmountString);
   
    //step:-5 
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTOtalString = balanceTotalElement.innerText;
   const previousBalanceTOtal = parseFloat(previousBalanceTOtalString);

    if(withdrawValue > previousBalanceTOtal){
        alert('Baap er bank e eto taka nai')
        return;
    }

     //step:-4
   const currentWithdrawTotal = withdrawValue + previousAmount;
   previousWithdraw.innerText = currentWithdrawTotal;

   //step:-6 
   const newBalanceTotal = previousBalanceTOtal - withdrawValue;
   balanceTotalElement.innerText = newBalanceTotal;




})