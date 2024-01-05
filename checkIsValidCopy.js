function checkIsValidCopy(original, copy) {

    const degrade = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#+:. ';
    const patron = /\W/

    for (let i = 0; i < original.length; i++) {

        if (original[i] != copy[i]) {
            if (original[i].toLowerCase() != copy[i] && !patron.test(copy[i])) {
                return false
            };

            let index = degrade.indexOf(original[i]);
            let secondIndex = degrade.indexOf(copy[i], index);

            if (secondIndex == -1) return false;
        }
    }
    return true;
}

console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#'));