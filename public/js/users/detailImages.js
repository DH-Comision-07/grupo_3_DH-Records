window.addEventListener('load', () => {


    const imagenInput = document.getElementById('profilePicture');
    const imagenErrContainer = document.getElementById('contenedor-errores-imagen');
    const imagenErrMsj = document.getElementById('msj-error-imagen');
    let imagenState = false;

    imagenInput.addEventListener('focus', (event) => {
        imagenErrContainer.classList.remove('hidden');
        imagenErrContainer.classList.add('visible');
        const file = event.target.files[0];
        console.log('Selected file:', file);

        if (!file) {
            // No se seleccionó ningún archivo
            imagenErrMsj.innerText = 'Debes seleccionar una imagen.';
            console.log('entre al if', imagenErrMsj.innerText);
            imagenState = false;
            event.target.classList.remove('focused-ok');
            event.target.classList.add('focused-error');
        }
    });

    imagenInput.addEventListener('blur', (event) => {
        imagenErrContainer.classList.remove('visible');
        imagenErrContainer.classList.add('hidden');
    });

    imagenInput.addEventListener('change', (event) => {
        const tiposPermitidos = ['image/jpeg', 'image/png'];
        const file = event.target.files[0];

        if (!tiposPermitidos.includes(file.type)) {
            imagenErrMsj.innerText = 'Solo se permiten archivos JPG y PNG.';
            imagenState = false;
            event.target.classList.remove('focused-ok');
            event.target.classList.add('focused-error');
        } else {
            // El tipo de archivo es válido
            imagenErrMsj.innerText = '😊';
            imagenState = true;
            event.target.classList.remove('focused-error');
            event.target.classList.add('focused-ok');
        }
    });

});