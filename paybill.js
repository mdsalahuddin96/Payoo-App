
document.getElementById('pay-now-btn').addEventListener('click',function(){
    const billName=getFormInputvalue('select-bill');
    const billerAccountNumber=getFormInputvalue('pay-bill-number-input')
    const amountToAdd=getFormInputvalue('pay-bill-amount-input');
    const pinNumber=getFormInputvalue('pay-bill-password-input');
    const transactionContainer=document.getElementById('transaction-container');
    const currBalance=getBalanceValue();
    if(billName==='Select Bill'){
        alert('Please Select a Bill!');
        return;
    }
    if(billerAccountNumber.length!=11){
        alert('Invalid Account Number!');
        return;
    }
    if(pinNumber!=='1234'){
        alert('Incorrect Pin Number!')
        return;
    }
    else{
        const newBalance=currBalance-Number(amountToAdd);
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
                    <h1 class="text-xl font-medium">${billName}</h1>
                    <p class="text-neutral/50">${new Date().toLocaleString()}</p>
                </div>
            </div>
            <div class="right">
                <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
        `
        transactionContainer.appendChild(transactionCard);
        alert(`Bill Paid Successfully`); 
    }
})

