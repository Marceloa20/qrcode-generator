// Elementos
const buttonGenerate = document.querySelector("#btn-generate");
const textarea = document.querySelector("#textarea");
const image = document.querySelector("#qrCodeImage");
const messageError = document.querySelector("#messageError");

// Funções
// Gera o QRCode
function generateQRCode() {
    const userInput = textarea.value;
    const urlApi = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(userInput)}&size=300x300`;
    image.setAttribute('src', urlApi);
}

// Limpeza do textarea e foca no campo
function clearTextarea() {
    textarea.value = '';
    textarea.focus();
}

// Verifica se está vazio o campo, caso não chama a função que gera o QRCode
function handleGenerate() {
    if(textarea.value.trim() === '') {
        messageError.textContent = 'Por favor digite alguma URL';
        messageError.classList.add('error');
        return
    }

    image.style.display = 'none'

    generateQRCode();
}

// Eventos
textarea.addEventListener("keydown", (e) => {
    if(e.key === 'Enter') {
        e.preventDefault(); // Previne o comportamento padrão de quebrar linha no textarea quando clica no Enter
        handleGenerate(); // Função de verificação e renderização do QRCode
    }
})

buttonGenerate.addEventListener("click", (e) => {
    handleGenerate();
})

// Exibe a imagem apenas quando pronta e limpa o campo de entrada de dados. 
image.addEventListener("load", () => {
    image.style.display = "block";
    clearTextarea();
})

textarea.addEventListener("input", () => {
    messageError.textContent = ''; // Retira a mensagem de erro assim que começa a digitar no textarea
})
