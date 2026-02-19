// get form inputElement and return its value
function getFormInputvalue(id){
    const input=document.getElementById(id);
    const value=input.value;
    return value;
}

//get balance value
function getBalanceValue(){
    const currentBalance=document.getElementById('balance').innerText;
    return Number(currentBalance);
}

//set balance value
function setBalanceValue(balance){
    document.getElementById('balance').innerText=balance;
}

// show only the selected id element 
function showOnly(id){
    const addMoney=document.getElementById('add-money-section');
    const withdraw=document.getElementById('widthdraw-section');
    const transaction=document.getElementById('transaction-section');
    const payBill=document.getElementById('pay-bill-section');
    
    //initially hide all section
    addMoney.classList.add('hidden');
    withdraw.classList.add('hidden');
    transaction.classList.add('hidden');
    payBill.classList.add('hidden');
    // Show only the passes id element
    const selected=document.getElementById(id);
    selected.classList.remove('hidden');

}