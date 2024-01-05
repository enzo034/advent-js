function adjustLights(lights) {
    function verCambios(lights) {
        let cambios = 0;

        for (let i = 1; i < lights.length; i++) {
            if (lights[i] === lights[i - 1]) {
                cambios++;
                lights[i] = lights[i] === '🟢' ? '🔴' : '🟢';
            }
        }

        return cambios;
    }

    return Math.min(verCambios([...lights]), verCambios([...lights].reverse()));
}



