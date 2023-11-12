const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

// Eventos
function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value; 
    console.log(qrCodeInputValue)
    if (!qrCodeInputValue) return;
    qrCodeBtn.innerText = "Gerando seu QR Code...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    container.classList.add("active");

}
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});