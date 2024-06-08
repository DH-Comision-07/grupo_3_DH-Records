window.onload = function() {

    let formLogin = document.querySelectorAll('input');

    let emailField = document.querySelector('#email');
     emailField.focus();

     let passwordField = document.querySelector('#contraseña');

    let errorMessagesEmail = document.querySelectorAll('.error__message--email');

    let errorMessagesPassword = document.querySelector('.error__message--password');

        
   formLogin.forEach((formField,index) => {

        formField.addEventListener('input', function(event){
            if(formField.value === '') {
                formField.classList.add('is-invalid');
                if(formField === emailField){
                    errorMessagesEmail[index].textContent = 'The email address is required';
                } else if (formField === passwordField) {
                    errorMessagesPassword.textContent = 'The password is required';
                }

            } else {
                formField.classList.remove('is-invalid');
                if(formField === emailField){
                    errorMessagesEmail[index].textContent = '';
                } else if (formField === passwordField) {
                    errorMessagesPassword.textContent = '';
                }
            } 
        })

    });
}
