function autonomousDrive(store, movements) {

    let actualStore = -1;
    let indexActual = -1;

    for (let driveIndex = 0; driveIndex < store.length; driveIndex++) {
        indexActual = store[driveIndex].indexOf('!');
        if (indexActual != -1) {
            actualStore = driveIndex;
            break;
        }
    }

    for (let i = 0; i < movements.length; i++) {
        const movement = movements[i];

        if (movement === 'R' && store[actualStore][indexActual + 1] === '.') {
            store[actualStore] = store[actualStore].replace('!', '.');
            store[actualStore] = store[actualStore].substring(0, indexActual + 1) + '!' + store[actualStore].substring(indexActual + 2);
            indexActual++;
        } else if (movement === 'L' && store[actualStore][indexActual - 1] === '.') {
            store[actualStore] = store[actualStore].replace('!', '.');
            store[actualStore] = store[actualStore].substring(0, indexActual - 1) + '!' + store[actualStore].substring(indexActual);
            indexActual--;
        } else if (movement === 'D' && store[actualStore + 1] && store[actualStore + 1][indexActual] === '.') {
            store[actualStore] = store[actualStore].replace('!', '.');
            store[actualStore + 1] = store[actualStore + 1].substring(0, indexActual) + '!' + store[actualStore + 1].substring(indexActual + 1);
            actualStore++;
        } else if (movement === 'U' && store[actualStore - 1] && store[actualStore - 1][indexActual] === '.') {
            store[actualStore] = store[actualStore].replace('!', '.');
            store[actualStore - 1] = store[actualStore - 1].substring(0, indexActual) + '!' + store[actualStore - 1].substring(indexActual + 1);
            actualStore--;
        }
    }
    return store;
}


//console.log(autonomousDrive(['**!**'], ['R', 'L', 'L', 'D'])); // ['**!**']
//console.log(autonomousDrive(['!****', '.....', '**..*', '.....'], ['R', 'D', 'R', 'U', 'L'])); // ['!****', '.....', '**..*', '.....']
//console.log(autonomousDrive(['.....', '.*.*.', '.!.*.', '.***.', '.....'], ['R', 'D', 'D', 'U', 'L', 'L'])); // ['.....', '.*.*.', '.!.*.', '.***.', '.....']
//console.log(autonomousDrive(['...!.', '..***', '...*.', '.....', '.*.*.'], ['R', 'R', 'D', 'U', 'U', 'L'])); // ['...!.', '..***', '...*.', '.....', '.*.*.']
console.log(autonomousDrive(
    [
        '***',
        '.*.',
        '!*.',
        '.*.',
        '***'
    ], ['L', 'L', 'U', 'U', 'U'])); // ['***', '.*.', '!*.', '.*.', '***']
/*console.log(autonomousDrive(['!'], ['R'])); // ['!']
console.log(autonomousDrive(['.'], ['L'])); // ['.'] */

