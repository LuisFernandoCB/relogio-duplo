var plat = window.confirm("Você está no Computador? \n \nSim--> OK \n\nNão--> Cancelar ")

if (plat == true) {
    
} else {
    var plat2 = window.confirm('Este site foi desenvolvido apenas para computador, é recomendado que você acesse o site específico para Mobile, escolha a opção "OK" para ser redirecionado ao site correto.')   
    if (plat2 == true) {
        location.href = "../index.html";
    } else {
        alert("Você foi avisado.")
    }
}