document.getElementById('deposite-btn').addEventListener('click', function(){
    //console.log('clicked');
    const depositInputForm = document.getElementById('deposite-form');
    const newDepositeAmmountString = depositInputForm.value;
    const newDepositeAmmount = parseFloat(newDepositeAmmountString);
    // console.log(depositeValue);

    const depositeField = document.getElementById('deposite-amount');
    const previousDepositeAmmountString = depositeField.innerText;
    const previousDepositeAmmount = parseFloat(previousDepositeAmmountString);
    // console.log(previousDepositeAmmount);

    const currentDepositeTotal = previousDepositeAmmount + newDepositeAmmount;
    depositeField.innerText = currentDepositeTotal;

    // clear the deposite field
    depositInputForm.value = '';

})