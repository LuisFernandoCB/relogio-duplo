//Altera a cor de fundo e de fonte da página conforme a hora

if (hora >= 6 && hora < 8) {
    document.body.style.background = "khaki"
    document.body.style.color = "darkolivegreen"
} else if (hora >= 8 && hora < 17) {
    document.body.style.background = "dodgerblue"
    document.body.style.color = "khaki"
} else if (hora >= 17 && hora < 18) {
    document.body.style.background = "darkmagenta"
    document.body.style.color = "darkgoldenrod"
} else if (hora >= 18 && hora < 19) {
    document.body.style.background = "darkslateblue"
    document.body.style.color = "cadetblue"
} else if (hora >= 19) {
    document.body.style.background = "midnightblue"
    document.body.style.color = "darkorchid"
} else {
    document.body.style.background = "midnightblue"
    document.body.style.color = "darkorchid"
}