document.getElementById('login-submit').addEventListener('click', function(){

    // get user email here
    const inputEmail = document.getElementById('user-email');
    const emailFinal = inputEmail.value;
    

    //get user password here
    const inputPass = document.getElementById('user-password');
    const passwordFinal = inputPass.value;
   
    if(emailFinal == 'rudraranjan.thakur@gmail.com' && passwordFinal == 'rudra@1995'){
        window.location.href = 'baking.html';
    }


})