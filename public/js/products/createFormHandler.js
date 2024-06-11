window.addEventListener('load', () => {

    // Para la interacción cuando se selecciona la Opcion de agragar un nuevo autor
    const checkbox = document.getElementById('newAuthorCheckbox');
    const authorLabel = document.getElementById('authorLabel');
    const authorSelect = document.getElementById('authorSelect');
    const newAuthorInput = document.getElementById('newAuthorInput');

    checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        authorLabel.innerText = isChecked ? "Nuevo Autor:" : "Autor:";
        
        authorSelect.classList.toggle('hidden', isChecked);
        authorSelect.classList.toggle('visible', !isChecked);
        authorSelect.required = !isChecked;

        newAuthorInput.classList.toggle('hidden', !isChecked);
        newAuthorInput.classList.toggle('visible', isChecked);
        newAuthorInput.required = isChecked;
    });

    //Validaciones Titulo: comportamiento y manejo de estado
    const tituloInput = document.getElementById('titulo');
    const tituloErrContainer = document.getElementById('contenedor-errores-titulo');
    const tituloErrMsj = document.getElementById('msj-error-titulo');
    let tituloState = false;

    tituloInput.addEventListener('focus', (event) => {
        tituloErrContainer.classList.remove('hidden');
        tituloErrContainer.classList.add('visible');
        
        if(!event.target.value) {
            tituloErrMsj.innerText = 'El producto debe tener titulo';
            tituloState = false;
            event.target.classList.remove('focused-ok');
            event.target.classList.add('focused-error');
        }
    });

    tituloInput.addEventListener('blur', (event) => {
        tituloErrContainer.classList.remove('visible');
        tituloErrContainer.classList.add('hidden');
    });

    tituloInput.addEventListener('input', (event) => {
        const value = event.target.value;
        console.log('Current value:', value);
        
        if (value.length < 5) {
            tituloErrMsj.innerText = 'El título debe tener al menos 5 caracteres.';
            tituloState = false;
            event.target.classList.remove('focused-ok');
            event.target.classList.add('focused-error');
        } else {
            tituloErrMsj.innerText = '😊';
            tituloState = true;
            event.target.classList.remove('focused-error');
            event.target.classList.add('focused-ok');
        }
    });


    //Validaciones Descripción: comportamiento y manejo de estado
    const descripcionInput = document.getElementById('descripcion');
    const descripcionErrContainer = document.getElementById('contenedor-errores-descripcion');
    const descripcionErrMsj = document.getElementById('msj-error-descripcion');
    let descripcionState = false;

    descripcionInput.addEventListener('focus', (event) => {
        descripcionErrContainer.classList.remove('hidden');
        descripcionErrContainer.classList.add('visible');
        
        if(!event.target.value) {
            descripcionErrMsj.innerText = 'El producto debe tener descripción';
            descripcionState = false;
            event.target.classList.remove('focused-ok');
            event.target.classList.add('focused-error');
        }
    });
    
    descripcionInput.addEventListener('blur', (event) => {
        descripcionErrContainer.classList.remove('visible');
        descripcionErrContainer.classList.add('hidden');
    });
    
    descripcionInput.addEventListener('input', (event) => {
        const value = event.target.value;
        console.log('Current value:', value);
        
        if (value.length < 20) {
            descripcionErrMsj.innerText = 'La descripción debe tener al menos 20 caracteres.';
            descripcionState = false;
            event.target.classList.remove('focused-ok');
            event.target.classList.add('focused-error');
        } else {
            descripcionErrMsj.innerText = '😊';
            descripcionState = true;
            event.target.classList.remove('focused-error');
            event.target.classList.add('focused-ok');
        }
    });


    //Validaciones de imagen: comportamiento y manejo de estado
    const imagenInput = document.getElementById('imagen');
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