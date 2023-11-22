
document.getElementById('btn-submit').addEventListener('click',function(){

const emailField = document.getElementById('user-email');
const email = emailField.value;

const passwordField = document.getElementById('user-password');
const password = passwordField.value;

if(email === 'ashikur@gmail.com' && password ==="2441139"){
    console.log ('Dhuke jaw')
}
else {
    console.log ('ber hoye jaaaa')
}

)}