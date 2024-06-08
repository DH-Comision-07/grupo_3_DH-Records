window.onload = function() {

    let formRegister = document.querySelectorAll('input');

    let nameField = document.querySelector('#nombreUsuario');
     nameField.focus();

     let emailField = document.querySelector('#email');

     let passwordField = document.querySelector('#contraseña');

     let errorMessagesName = document.querySelector('.error__message--name');

     let errorMessagesEmail = document.querySelector('.error__message--email');

     let errorMessagesPassword = document.querySelector('.error__message--password');


     formRegister.forEach((formField,index) => {

        formField.addEventListener('input', function(event){
            if(formField.value === '') {
                formField.classList.add('is-invalid');
                if(formField === nameField){ 
                    errorMessagesName.textContent = 'The username is required';
                 } else if(formField === emailField){
                    errorMessagesEmail.textContent = 'The email address is required';
                } else if (formField === passwordField) {
                    errorMessagesPassword.textContent = 'The password is required';
                }

            } else {
                formField.classList.remove('is-invalid');
                if(formField === nameField){
                    errorMessageName.textContent = '';
                } else if(formField === emailField){
                    errorMessagesEmail[index].textContent = '';
                } else if (formField === passwordField) {
                    errorMessagesPassword.textContent = '';
                }
            } 
        })

    });

}