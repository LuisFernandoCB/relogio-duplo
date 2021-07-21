
// Variáveis

var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()


var txtHora = document.querySelector("#hora")
var imagem = document.querySelector("#imagem")


//Mostra a hora atual

txtHora.innerHTML += `<p>Agora são ${hora} Horas</p>`

// Altera a imagem conforme a hora

if (hora >= 6 && hora < 8) {
   imagem.innerHTML = '<img src="IMAGES/amanhecer.png" alt="KKK">'
} else if (hora >= 8 && hora < 17) {
   imagem.innerHTML = '<img src="IMAGES/dia.png" alt="KKK">'
} else if (hora >= 17 && hora < 18) {
   imagem.innerHTML = '<img src="IMAGES/pordosol.png" alt="KKK">'
} else if (hora >= 18 && hora < 19) {
   imagem.innerHTML = '<img src="IMAGES/anoitecer.png" alt="KKK">'
} else if (hora >= 19) {
   imagem.innerHTML = '<img src="IMAGES/noite.png" alt="KKK">'
} else if (hora < 6) {
   imagem.innerHTML = '<img src="IMAGES/noite.png" alt="KKK">'
} else {
   imagem.innerHTML = "<p>Cuidado!!! Você está em um MULTIVERSO</p>"
}