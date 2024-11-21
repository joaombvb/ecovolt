document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const assunto = document.getElementById("assunto");
    const mensagem = document.getElementById("mensagem");
    const anexo = document.getElementById("anexo");

    form.addEventListener("submit", (event) => {
        let isValid = true;
        let errorMessages = [];

        // Validação do nome
        if (nome.value.trim().length < 3) {
            isValid = false;
            errorMessages.push("O nome deve ter pelo menos 3 caracteres.");
        }

        // Validação do telefone
        const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!telefoneRegex.test(telefone.value)) {
            isValid = false;
            errorMessages.push("O telefone deve estar no formato (xx) xxxxx-xxxx.");
        }

        // Validação do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            isValid = false;
            errorMessages.push("O e-mail deve ser válido.");
        }

        // Validação do assunto
        if (assunto.value.trim().length < 3) {
            isValid = false;
            errorMessages.push("O assunto deve ter pelo menos 3 caracteres.");
        }

        // Validação da mensagem
        if (mensagem.value.trim().length < 10) {
            isValid = false;
            errorMessages.push("A mensagem deve ter pelo menos 10 caracteres.");
        }

        // Validação do anexo (se presente)
        if (anexo.files.length > 0) {
            const file = anexo.files[0];
            const allowedTypes = ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
            if (!allowedTypes.includes(file.type)) {
                isValid = false;
                errorMessages.push("O arquivo anexado deve ser do tipo JPG, PNG, PDF, DOC ou DOCX.");
            }
        }

        // Exibição de erros
        if (!isValid) {
            event.preventDefault();
            alert(errorMessages.join("\n"));
        }
    });
});
