document.getElementById('cashout-btn').addEventListener('click',function(){
    
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const agentNumber=getFormInputvalue('cashout-number-input');
    const inputAmount=getFormInputvalue('cashout-amount-input');
    const pinNumber=getFormInputvalue('cashout-password-input');
    const currentBalance=getBalanceValue();
    if(agentNumber.length!=11){
        alert("Wrong Agent Number!");
        return;
    }
    if(pinNumber!='1234'){
        alert('Invalid Pin Number');
        return
    }
    const newBalance=currentBalance-Number(inputAmount);
    if(newBalance<0){
        alert("Insufficient Amount");
        return
    }
    else{
        alert('Cashout Successful');
        setBalanceValue(newBalance);
    }
})