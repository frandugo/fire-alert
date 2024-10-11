document.querySelector('.selected-option').addEventListener('click', function () {
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

const options = document.querySelectorAll('.dropdown-options li');
options.forEach(option => {
    option.addEventListener('click', function () {
        const selectedOption = document.querySelector('.selected-option');
        const selectedText = this.textContent;
        const selectedIcon = this.querySelector('img').src;

        // Actualiza el texto y el icono en la opción seleccionada
        selectedOption.querySelector('span').textContent = selectedText;
        selectedOption.querySelector('img').src = selectedIcon;

        // Cierra el menú desplegable
        this.parentElement.style.display = 'none';
    });
});