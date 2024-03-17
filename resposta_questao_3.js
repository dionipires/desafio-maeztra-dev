function isValidSequence(str) {
    const stack = [];
    const openingChars = ['[', '{', '('];
    const closingChars = [']', '}', ')'];
    const matchingPairs = { '[': ']', '{': '}', '(': ')' };

    for (let char of str) {
        if (openingChars.includes(char)) {
            stack.push(char);
        } else if (closingChars.includes(char)) {
            if (stack.length === 0) {
                return false; // Se encontramos um elemento de fechamento antes de um de abertura, a sequência é inválida
            }
            const lastOpening = stack.pop();
            if (matchingPairs[lastOpening] !== char) {
                return false; // Se o elemento de fechamento não corresponder ao último elemento de abertura, a sequência é inválida
            }
        }
    }

    return stack.length === 0; // Se houver algum elemento de abertura que não tenha um correspondente de fechamento, a sequência é inválida
}

// Forma de Teste:
console.log(isValidSequence("{ [ ( ) ( ) { } [ ] ] { } }")); // true
console.log(isValidSequence("{ [ ( ( ) ] }")); // false
console.log(isValidSequence("( ( ) { } [ [ ] )")); // false
console.log(isValidSequence("[ { } ( [ ) ] ]")); // false
