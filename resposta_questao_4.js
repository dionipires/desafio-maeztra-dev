function mostWorkingYears(people) {
    const yearsMap = new Map();

    // Percorre cada pessoa e conta quantas pessoas estavam trabalhando em cada ano
    for (let i = 0; i < people.length; i++) {
        const [startYear, retireYear] = people[i];
        for (let year = startYear; year <= retireYear; year++) {
            if (yearsMap.has(year)) {
                yearsMap.set(year, yearsMap.get(year) + 1);
            } else {
                yearsMap.set(year, 1);
            }
        }
    }

    // Encontra o ano/anos com o maior número de pessoas trabalhando
    let maxWorkingYears = [];
    let maxCount = 0;
    for (let [year, count] of yearsMap) {
        if (count > maxCount) {
            maxWorkingYears = [year];
            maxCount = count;
        } else if (count === maxCount) {
            maxWorkingYears.push(year);
        }
    }

    return maxWorkingYears;
}

// Forma de Teste:
const people = [[1960, 2005], [1945, 2008], [1938, 1999], [1950, 1980], [1970, 1995]];
console.log(mostWorkingYears(people));