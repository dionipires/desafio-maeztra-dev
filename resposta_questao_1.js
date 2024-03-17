function verificarOrdenacao(number) {
    let strNumber = number.toString();

    let growing = true;
    for (let i = 0; i < strNumber.length - 1; i++) {
        if (parseInt(strNumber[i]) + 1 !== parseInt(strNumber[i + 1]) && parseInt(strNumber[i]) !== parseInt(strNumber[i + 1])) {
            growing = false;
            break;
        }
    }

    let descending = true;
    for (let i = 0; i < strNumber.length - 1; i++) {
        if (parseInt(strNumber[i]) - 1 !== parseInt(strNumber[i + 1]) && parseInt(strNumber[i]) !== parseInt(strNumber[i + 1])) {
           descending = false;
            break;
        }
    }

    if (growing) {
        return "Está ordenado em ordem crescente.";
    } else if (descending) {
        return "Está ordenado em ordem decrescente.";
    } else {
        return "Não está ordenado.";
    }
}

// Forma de Teste:
console.log(verificarOrdenacao(12345678)); // ordem crescente.
console.log(verificarOrdenacao(152456457)); // Não está ordenado.
console.log(verificarOrdenacao(2111111)); // ordem crescente.