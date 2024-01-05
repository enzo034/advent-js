function manufacture(gifts, materials) {
    const materialSet = new Set(materials);
    const result = [];

    for (const gift of gifts) {
        const uniqueGiftChars = new Set(gift);

        let canManufacture = true;
        for (const char of uniqueGiftChars) {
            if (!materialSet.has(char)) {
                canManufacture = false;
                break;
            }
        }

        if (canManufacture) {
            result.push(gift);
        }
    }

    return result;
}

