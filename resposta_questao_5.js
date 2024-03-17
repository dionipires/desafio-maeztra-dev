
function numberOfWaysToArrange(people) {
    // Caso base: se não houver ninguém, há apenas uma maneira de organizar
    if (people === 0) {
        return 1;
    }
    
    let ways = 1;
    // Calcula o fatorial de pessoas, que representa o número de maneiras distintas de organização
    for (let i = 1; i <= people; i++) {
        ways *= i;
    }
    
    return ways;
}

// Forma de Teste:
const numberOfPeople = 3;
console.log("Número de modos distintos de organização:", numberOfWaysToArrange(numberOfPeople));
