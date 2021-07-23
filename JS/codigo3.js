// botões

// variáveis

var btn1 = document.querySelector("#tema1")
var btn2 = document.querySelector("#tema2")
var btn3 = document.querySelector("#tema3")
var btn4 = document.querySelector("#tema4")



if (hora >= 6 && hora < 8) {
    btn1.style.background = "dodgerblue"
    btn2.style.background = "darkmagenta"
    btn3.style.background = "darkslateblue"
    btn4.style.background = "midnightblue"
} else if (hora >= 8 && hora < 17) {
    btn1.style.background = "khaki"
    btn2.style.background = "darkmagenta"
    btn3.style.background = "darkslateblue"
    btn4.style.background = "midnightblue"
} else if (hora >= 17 && hora < 18) {
    btn1.style.background = "khaki"
    btn2.style.background = "dodgerblue"
    btn3.style.background = "darkslateblue"
    btn4.style.background = "midnightblue"
} else if (hora >= 18 && hora < 19) {
    btn1.style.background = "khaki"
    btn2.style.background = "dodgerblue"
    btn3.style.background = "darkmagenta"
    btn4.style.background = "midnightblue"
} else if (hora >= 19) {
    btn1.style.background = "khaki"
    btn2.style.background = "dodgerblue"
    btn3.style.background = "darkmagenta"
    btn4.style.background = "darkslateblue"
} else {
    btn1.style.background = "khaki"
    btn2.style.background = "dodgerblue"
    btn3.style.background = "darkmagenta"
    btn4.style.background = "darkslateblue"
}

function clicou1() {
    if (hora >= 6 && hora < 8) {
        document.body.style.background = "dodgerblue"
        document.body.style.color = "khaki"
        imagem.innerHTML = '<img src="IMAGES/dia.png" alt="KKK" >'
    } else {
        document.body.style.background = "khaki"
        document.body.style.color = "darkolivegreen"
        imagem.innerHTML = '<img src="IMAGES/amanhecer.png" alt="KKK">'
    }

    if (hora >= 6 && hora < 8) {
        btn1.style.background = "rgb(22, 115, 207)"
        btn2.style.background = "darkmagenta"
        btn3.style.background = "darkslateblue"
        btn4.style.background = "midnightblue"
    } else if (hora >= 8 && hora < 17) {
        btn1.style.background = "rgb(202, 194, 117)"
        btn2.style.background = "darkmagenta"
        btn3.style.background = "darkslateblue"
        btn4.style.background = "midnightblue"
    } else if (hora >= 17 && hora < 18) {
        btn1.style.background = "rgb(202, 194, 117)"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "darkslateblue"
        btn4.style.background = "midnightblue"
    } else if (hora >= 18 && hora < 19) {
        btn1.style.background = "rgb(202, 194, 117)"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "darkmagenta"
        btn4.style.background = "midnightblue"
    } else if (hora >= 19) {
        btn1.style.background = "rgb(202, 194, 117)"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "darkmagenta"
        btn4.style.background = "darkslateblue"
    } else {
        btn1.style.background = "rgb(202, 194, 117)"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "darkmagenta"
        btn4.style.background = "darkslateblue"
    }
}

function clicou2() {
    if ((hora >= 6 && hora < 8) || (hora >= 8 && hora < 17)) {
        document.body.style.background = "darkmagenta"
        document.body.style.color = "darkgoldenrod"
        imagem.innerHTML = '<img src="IMAGES/pordosol.png" alt="KKK">'
    } else {
        document.body.style.background = "dodgerblue"
        document.body.style.color = "khaki"
        imagem.innerHTML = '<img src="IMAGES/dia.png" alt="KKK" >'
    }

    if (hora >= 6 && hora < 8) {
        btn1.style.background = "dodgerblue"
        btn2.style.background = "rgb(107, 0, 107)"
        btn3.style.background = "darkslateblue"
        btn4.style.background = "midnightblue"
    } else if (hora >= 8 && hora < 17) {
        btn1.style.background = "khaki"
        btn2.style.background = "rgb(107, 0, 107)"
        btn3.style.background = "darkslateblue"
        btn4.style.background = "midnightblue"
    } else if (hora >= 17 && hora < 18) {
        btn1.style.background = "khaki"
        btn2.style.background = "rgb(22, 115, 207)"
        btn3.style.background = "darkslateblue"
        btn4.style.background = "midnightblue"
    } else if (hora >= 18 && hora < 19) {
        btn1.style.background = "khaki"
        btn2.style.background = "rgb(22, 115, 207)"
        btn3.style.background = "darkmagenta"
        btn4.style.background = "midnightblue"
    } else if (hora >= 19) {
        btn1.style.background = "khaki"
        btn2.style.background = "rgb(22, 115, 207)"
        btn3.style.background = "darkmagenta"
        btn4.style.background = "darkslateblue"
    } else {
        btn1.style.background = "khaki"
        btn2.style.background = "rgb(22, 115, 207)"
        btn3.style.background = "darkmagenta"
        btn4.style.background = "darkslateblue"
    }
}

function clicou3() {
    if (hora >= 18 && hora < 19) { 
        document.body.style.background = "darkmagenta"
        document.body.style.color = "darkgoldenrod"
        imagem.innerHTML = '<img src="IMAGES/pordosol.png" alt="KKK">'
    } else if (hora >= 19) {
        document.body.style.background = "darkmagenta"
        document.body.style.color = "darkgoldenrod"
        imagem.innerHTML = '<img src="IMAGES/pordosol.png" alt="KKK">'
    } else if (hora < 6) {
        document.body.style.background = "darkmagenta"
        document.body.style.color = "darkgoldenrod"
        imagem.innerHTML = '<img src="IMAGES/pordosol.png" alt="KKK">'
    } else {
        document.body.style.background = "darkslateblue"
        document.body.style.color = "cadetblue"
        imagem.innerHTML = '<img src="IMAGES/anoitecer.png" alt="KKK">'
    }

    if (hora >= 6 && hora < 8) {
        btn1.style.background = "dodgerblue"
        btn2.style.background = "darkmagenta"
        btn3.style.background = "rgb(50, 42, 97)"
        btn4.style.background = "midnightblue"
    } else if (hora >= 8 && hora < 17) {
        btn1.style.background = "khaki"
        btn2.style.background = "darkmagenta"
        btn3.style.background = "rgb(50, 42, 97)"
        btn4.style.background = "midnightblue"
    } else if (hora >= 17 && hora < 18) {
        btn1.style.background = "khaki"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "rgb(50, 42, 97)"
        btn4.style.background = "midnightblue"
    } else if (hora >= 18 && hora < 19) {
        btn1.style.background = "khaki"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "rgb(107, 0, 107)"
        btn4.style.background = "midnightblue"
    } else if (hora >= 19) {
        btn1.style.background = "khaki"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "rgb(107, 0, 107)"
        btn4.style.background = "darkslateblue"
    } else {
        btn1.style.background = "khaki"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "rgb(107, 0, 107)"
        btn4.style.background = "darkslateblue"
    }
}
function clicou4() {
    if (hora >= 19) { 
        document.body.style.background = "darkslateblue"
        document.body.style.color = "cadetblue"
        imagem.innerHTML = '<img src="IMAGES/anoitecer.png" alt="KKK">'
    } else if (hora < 6) {
        document.body.style.background = "darkslateblue"
        document.body.style.color = "cadetblue"
        imagem.innerHTML = '<img src="IMAGES/anoitecer.png" alt="KKK">'
    } else {
        document.body.style.background = "midnightblue"
        document.body.style.color = "darkorchid"
        imagem.innerHTML = '<img src="IMAGES/noite.png" alt="KKK">'
    }

    if (hora >= 6 && hora < 8) {
        btn1.style.background = "dodgerblue"
        btn2.style.background = "darkmagenta"
        btn3.style.background = "darkslateblue"
        btn4.style.background = "rgb(17, 17, 77)"
    } else if (hora >= 8 && hora < 17) {
        btn1.style.background = "khaki"
        btn2.style.background = "darkmagenta"
        btn3.style.background = "darkslateblue"
        btn4.style.background = "rgb(17, 17, 77)"
    } else if (hora >= 17 && hora < 18) {
        btn1.style.background = "khaki"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "darkslateblue"
        btn4.style.background = "rgb(17, 17, 77)"
    } else if (hora >= 18 && hora < 19) {
        btn1.style.background = "khaki"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "darkmagenta"
        btn4.style.background = "rgb(17, 17, 77)"
    } else if (hora >= 19) {
        btn1.style.background = "khaki"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "darkmagenta"
        btn4.style.background = "rgb(50, 42, 97)"
    } else {
        btn1.style.background = "khaki"
        btn2.style.background = "dodgerblue"
        btn3.style.background = "darkmagenta"
        btn4.style.background = "rgb(50, 42, 97)e"
    }
}