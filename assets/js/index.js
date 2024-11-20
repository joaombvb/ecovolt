document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    let isValid = true;

    // Nome
    const nameField = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameField.value.trim() === '') {
        nameError.textContent = 'O nome é obrigatório.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }

    // E-mail
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // Mensagem
    const messageField = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (messageField.value.trim() === '') {
        messageError.textContent = 'A mensagem é obrigatória.';
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.textContent = '';
        messageError.style.display = 'none';
    }

    // Se todos os campos forem válidos
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        document.getElementById('contact-form').reset();
    }
});
