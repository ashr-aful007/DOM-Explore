document.getElementById('diposite-btn').addEventListener('click', function(){

    const dipositeAmount = getValueInputFild('diposit-input');
    const priveousAmount = getElementValue('diposit-total');
    //add dipositeAmount and priveousAmount
    const newAmountUpdate = dipositeAmount + priveousAmount;

    //add and update new value
    setAndUpdateValue('diposit-total', newAmountUpdate);

      
})
