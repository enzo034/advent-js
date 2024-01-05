function organizeGifts(gifts) {
    const matchNumeros = gifts.match(/\d+/g);
    const matchTipos = gifts.match(/\D+/g);

    let b = 0;
    let c = 0;
    let p = 0;
    let regalosOrganizados = '';

    for (let i = 0; i < matchTipos.length; i++) {
        const num = +matchNumeros[i];
        const tipo = matchTipos[i];

        for (let j = 0; j < num; j++) {
            b++;
            if (b >= 10) {
                c++;
                b = 0;
            }
            if (c >= 5) {
                p++;
                c = 0;
            }
        }

        const pStr = `[${tipo}]`.repeat(p);
        const cStr = `{${tipo}}`.repeat(c);
        const bStr = b ? `(${tipo.repeat(b)})` : '';

        regalosOrganizados+=pStr+cStr+bStr;

        p = 0;
        c = 0;
        b = 0;
    }

    return regalosOrganizados;
}


const result1 = organizeGifts(`76a11b`);
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)*/