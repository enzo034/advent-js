function decode(message) {
    const m = message.match(/\(([^()]+)\)/);

    if (!m) return message;

    const s = m[0].slice(1, -1).split("").reverse().join('');

    const r = message.replace(m[0], s);

    return decode(r);
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo
console.log("_____________________");
const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!
console.log("_____________________");
const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus 

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus