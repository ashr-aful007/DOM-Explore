/**
 * 1| add event handler with the withdraw button
 * 2|get the withdraw amount from the input field
 * 2.5| also make sure to convert the input into a number by using parseFloat
 * 3| get previous withdraw total 
 * 4| calculate total withdraw amou
 */


//step:-1 
document.getElementById('withdraw-btn').addEventListener('click', function(){
     //step:-2
    const withdrawFildAmount = document.getElementById('withdraw-fild');
   const withdrawValueSting = withdrawFildAmount.value;
   const withdrawValue = parseFloat(withdrawValueSting);

   //step:-3
   const previousWithdraw = document.getElementById('previous-withdraw');
   const previousAmountString = previousWithdraw.innerText;
   const previousAmount = parseFloat(previousAmountString);
   
   //

    


})