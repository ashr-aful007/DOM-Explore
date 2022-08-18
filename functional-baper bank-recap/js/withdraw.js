document.getElementById('withdraw-btn').addEventListener('click', function(){
   
    //get input from withdraw amount
     const withdawAmount = getValueInputFild('withdraw-fild');
     
     if(isNaN(withdawAmount)){
        alert('please give valid information');
        return
     }

     //get priveous withdraw amount
     const priveousWithdraw =  getElementValue('previous-withdraw');
     

     //get total amount 
    const totaPriveouslBlance =  getElementValue('balance-total');

     if( withdawAmount > totaPriveouslBlance){
        alert('incapisent balence')
        return;
     }


    //sum inputWithdraw nad priveousWithdraw
    const totalWithdraw = withdawAmount + priveousWithdraw;
    //add and update withdraw amount
     setAndUpdateValue('previous-withdraw', totalWithdraw)

     
    
    const updateTotalBlance = totalWithdraw - totaPriveouslBlance;
    //
    setAndUpdateValue('balance-total', updateTotalBlance)
     
})