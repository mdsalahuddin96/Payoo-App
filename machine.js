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