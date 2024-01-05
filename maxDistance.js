function maxDistance(movements) {

    let distance = 0;
    let comodin = 0;

    for (const move of movements) {
        if (move == '>') distance++;
        else if (move == '<') distance--;
        else if (move == '*') comodin++;
    }

    return Math.abs(distance) + comodin;
}

const movements = '<*'
const result = maxDistance(movements)
console.log(result) // -> 2
