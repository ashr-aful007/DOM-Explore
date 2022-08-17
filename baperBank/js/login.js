//step number 1: add click envent handler with the submit button 
const subMitButton = document.getElementById('submit-btn').addEventListener('click', function(event){
     //step-2: get the email address inside the email input fild
     // always remember to use .value to get text from an input field
     const emailAddress = document.getElementById('user-email');
     const email = emailAddress.value;

     //step3: get password
     //3.a: set id on the element
     //4.b. get the element
     //3.c. get value from the element
     const userPassword = document.getElementById('user-password');
     const password = userPassword.value;

     //DANGER:- DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE;
     //STEP-4. veryfy email and password and check wether valid user or not
     if(email === 'sontan@bap.com' && password === 'secret'){
          window.location.href = 'bank.html';
     }
     else{
          alert('please give valid password')
     }
     
})