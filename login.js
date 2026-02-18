// get button and input element
const loginBtn=document.getElementById('login-btn');
const inputNumber=document.getElementById('number-input')
const inputPassword=document.getElementById('password-input')

// add eventlistener to button
loginBtn.addEventListener('click',function(){
    const mobileNumber=inputNumber.value;
    const pin=inputPassword.value;
    if(mobileNumber=="01712345678"&&pin=="1234"){
        alert('login successful');
        window.location.assign('home.html')
    }
    else{
        alert("Login Failed")
        return;
    }
})