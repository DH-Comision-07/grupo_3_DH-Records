window.onload = function() {

    let formLogin = document.querySelectorAll('input');

    let emailField = document.querySelector('#email');
     emailField.focus();

     let passwordField = document.querySelector('#contraseña');

    let errorMessages = document.querySelectorAll('.error__message');


        
   formLogin.forEach((formField,index) => {

        formField.addEventListener('input', function(event){
            if(formField.value === '') {
                formField.classList.add('is-invalid');
                if(formField === emailField){
                    errorMessages[index].textContent = 'The email address is required';
                } else if (formField === passwordField) {
                    errorMessages[index].textContent = 'The password is required';
                }

            } else {
                formField.classList.remove('is-invalid');
                if(formField === emailField){
                    errorMessages[index].textContent = '';
                } else if (formField === passwordField) {
                    errorMessages[index].textContent = '';
                }
            } 
        })

    });
}
