document.getElementById('add-money-btn').addEventListener('click',function(){
    const bankName=getFormInputvalue('select-bank');
    const bankAccNo=getFormInputvalue('add-money-number-input');
    const addAmount=getFormInputvalue('add-money-amount-input');
    const pinNumber=getFormInputvalue('add-money-password-input');
    const currBalance=getBalanceValue();
   
    if(bankName==='Select A Bank'){
        alert('Please Select a Bank!');
        return;
    }
    if(bankAccNo.length!=11){
        alert('Invalid Account Number!');
        return;
    }
    if(pinNumber!=='1234'){
        alert('Incorrect Pin Number!')
        return;
    }
    else{
        const newBalance=currBalance+Number(addAmount);
        setBalanceValue(newBalance);
        alert(`Money Added Successfully from ${bankName} at ${new Date().toLocaleString()}`); 
    }
})