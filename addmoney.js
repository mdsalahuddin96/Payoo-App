
document.getElementById('add-money-btn').addEventListener('click',function(){
    const bankName=getFormInputvalue('select-bank');
    const bankAccNo=getFormInputvalue('add-money-number-input');
    const addAmount=getFormInputvalue('add-money-amount-input');
    const pinNumber=getFormInputvalue('add-money-password-input');
    const transactionContainer=document.getElementById('transaction-container');
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

        // Dynamically added transaction to the transaction section.
        
        const transactionCard=document.createElement('div');
        transactionCard.classList.add('flex', 'justify-between', 'items-center', 'bg-base-100')
        transactionCard.innerHTML=`
            <div class="left flex items-center gap-2">
                <div class="logo bg-primary-content p-2 rounded-full">
                    <img src="./assets/opt-1.png">
                </div>
                <div>
                    <h1 class="text-xl font-medium">Add Money From ${bankName}</h1>
                    <p class="text-neutral/50">${new Date().toLocaleString()}</p>
                </div>
            </div>
            <div class="right">
                <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
        `
        transactionContainer.appendChild(transactionCard);
        alert(`Money Added Successfully`); 
    }
})

