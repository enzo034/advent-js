function findNaughtyStep(original, modified) {

    if(original == modified) return '';

    if(original.length > modified.length){
        for(let i = 0; i < original.length; i++){
            if(original[i] != modified[i]){
                return original[i];
            }
        }
    } else {
        for(let i = 0; i < modified.length; i++){
            if(original[i] != modified[i]){
                return modified[i];
            }
        }
    }
}

const original1 = 'abcd'
const modified1 = 'abcde'
console.log(findNaughtyStep(original1, modified1)); // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)); // ''