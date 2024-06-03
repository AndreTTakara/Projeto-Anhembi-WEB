document.addEventListener('DOMContentLoaded', function() {
    const editButton = document.getElementById('botaoedit');
    const saveButton = document.getElementById('botaosave');
    const inputs = document.querySelectorAll('input');

    editButton.addEventListener('click', function() {
        inputs.forEach(input => {
            input.disabled = false;
        });
        editButton.style.display = 'none';
        saveButton.style.display = 'block';
    });
});