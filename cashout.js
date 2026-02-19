document.getElementById('withdraw-btn').addEventListener('click',function(){
    const agentNumber=getFormInputvalue('cashout-number-input');
    const inputAmount=getFormInputvalue('cashout-amount-input');
    const pinNumber=getFormInputvalue('cashout-password-input');
    const transactionContainer=document.getElementById('transaction-container');
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
        setBalanceValue(newBalance);

        // Dynamically added transaction to the transaction section.
        const transactionCard=document.createElement('div');
        transactionCard.classList.add('flex', 'justify-between', 'items-center', 'bg-base-100')
        transactionCard.innerHTML=`
            <div class="left flex items-center gap-2">
                <div class="logo bg-primary-content p-2 rounded-full">
                    <img src="./assets/opt-1.png">
                </div>
                <div>
                    <h1 class="text-xl font-medium">Cash Out ${inputAmount} Taka</h1>
                    <p class="text-neutral/50">${new Date().toLocaleString()}</p>
                </div>
            </div>
            <div class="right">
                <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
        `
        transactionContainer.appendChild(transactionCard);
        
        alert('Cashout Successful');
        
    }
})