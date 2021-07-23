var plat = window.confirms("Você está no Celular? \n \nSim--> OK \n\nNão--> Cancelar ")

if (plat == true) {
    
} else {
    var plat2 = window.confirm('Este site foi desenvolvido apenas para celular, é recomendado que você acesse o site específico para Desktop, escolha a opção "OK" para ser redirecionado ao site correto.')   
    if (plat2 == true) {
        location.href = "../indexDesktop.html";
    } else {
        alert("Você foi avisado.")
    }
}