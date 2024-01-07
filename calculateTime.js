function calculateTime(deliveries) {

    let tiempo = new Date(1970, 0, 1);

    for (const time of deliveries) {
        tiempo.setHours(tiempo.getHours() + Number(time.substring(0, 2)));
        tiempo.setMinutes(tiempo.getMinutes() + Number(time.substring(3, 5)));
        tiempo.setSeconds(tiempo.getSeconds() + Number(time.substring(6, 8)));
    }

    const h = tiempo.getHours() * 3600000
    const m = tiempo.getMinutes() * 60000
    const s = tiempo.getSeconds() * 1000;

    let msDeliveries = h + m + s;

    function milisegundosToTiempo(ms) {
        let horas = Math.floor(ms / 3600000);
        let minutos = Math.floor((ms % 3600000) / 60000);
        let segundos = Math.floor((ms % 60000) / 1000);
    
        let formatoHoras = horas.toString().padStart(2, '0');
        let formatoMinutos = minutos.toString().padStart(2, '0');
        let formatoSegundos = segundos.toString().padStart(2, '0');
    
        return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
    }

    if(msDeliveries >= 25200000){
        return milisegundosToTiempo(msDeliveries - 25200000);
    } else {
        return '-' + milisegundosToTiempo(25200000 - msDeliveries);
    }
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']));
// '00:30:00'

console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])); // '-05:29:00'