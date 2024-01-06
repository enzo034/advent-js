function calculateTime(deliveries) {
    let totalMilisegundos = 0;

    for (const time of deliveries) {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        totalMilisegundos += hours * 3600000 + minutes * 60000 + seconds * 1000;
    }

    const baseMilisegundos = 7 * 3600000;
    const diferenciaMilisegundos = totalMilisegundos - baseMilisegundos;
    
    function convertirMilisegundosATiempo(ms) {
        const horas = Math.floor(ms / 3600000);
        const minutos = Math.floor((ms % 3600000) / 60000);
        const segundos = Math.floor((ms % 60000) / 1000);
    
        return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    }

    const resultadoMilisegundos = Math.abs(diferenciaMilisegundos);
    const resultadoTiempo = convertirMilisegundosATiempo(resultadoMilisegundos);
    
    if (diferenciaMilisegundos >= 0) {
        return resultadoTiempo;
    } else {
        return '-' + resultadoTiempo;
    }
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']));
// '00:30:00'

console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])); // '-05:29:00'