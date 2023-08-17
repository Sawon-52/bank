// step 01: add event handelar with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('btn click');
    // step 02: get email 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    
    // get password 
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    console.log(password);
})