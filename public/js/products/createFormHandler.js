window.addEventListener('load', () => {
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
});