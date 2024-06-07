window.onload = function() {

    let formLogin = document.querySelectorAll('input');

    let inputField = document.querySelector('#email');
     inputField.focus();

     
let errorMessages = document.querySelectorAll('.error-message');

        
   formLogin.forEach((formField,index) => {
        formField.addEventListener('input', function(event){
            if(formField.value === '') {
                formField.classList.add('is-invalid');
                errorMessages[index].textContent = 'The email address is required';
            } else {
                formField.classList.remove('is-invalid');
                errorMessages[index].textContent = '';
            }
        })




    });
}