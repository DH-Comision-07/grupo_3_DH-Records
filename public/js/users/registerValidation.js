window.onload = function() {

    let formRegister = document.querySelectorAll('input');

    let nameField = document.querySelector('#nombreUsuario');
     nameField.focus();

     let emailField = document.querySelector('#email');

     let passwordField = document.querySelector('#contraseña');

     let errorMessages = document.querySelectorAll('.error__message');




     formRegister.forEach((formField,index) => {

        formField.addEventListener('input', function(event){
            if(formField.value === '') {
                formField.classList.add('is-invalid');
                if(formField === nameField){ 
                    errorMessages[index].textContent = 'The username is required';
                 } else if(formField === emailField){
                    errorMessages[index].textContent = 'The email address is required';
                } else if (formField === passwordField) {
                    errorMessages[index].textContent = 'The password is required';
                }

            } else if (formField === nameField && formField.value.length < 2) {
                formField.classList.add('is-invalid');
                    errorMessages[index].textContent = 'It must have at least 2 characters';
    
            } else if (formField === passwordField && formField.value.length < 8) {
                formField.classList.add('is-invalid');
                    errorMessages[index].textContent = 'It must have at least 8 characters'; 
            } else {
                formField.classList.remove('is-invalid');
                if(formField === nameField){
                    errorMessages[index].textContent = '';
                } else if(formField === emailField){
                    errorMessages[index].textContent = '';
                } else if (formField === passwordField) {
                    errorMessages[index].textContent = '';
                }
            } 
        })

    });

}