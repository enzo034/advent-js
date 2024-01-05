function getIndexsForPalindrome(word) {

    let respuesta = [-1];
    let indexInicial = -1

    const half = Math.floor(word.length / 2);
    const length = word.length - 1;

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[length - i]) {
            if (respuesta[0] != -1) {
                return null
            };

            let tempLetra = word[i];
            indexInicial = i;
            let indexDiff = word.indexOf(word[length - i], i)

            if(word.length % 2 == 1 && word[half] == word[i]){
                indexInicial = half;
            };

            let arrayTemp = word.split('');
            arrayTemp[indexInicial] = word[indexDiff];
            arrayTemp[indexDiff] = tempLetra;

            respuesta = [indexInicial, indexDiff];

            word = arrayTemp.join('');
        }
    }

    return respuesta[0] == -1 ? [] : respuesta;

}

console.log(getIndexsForPalindrome('rotaratov')); // [4, 8]
