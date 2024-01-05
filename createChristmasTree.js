function createChristmasTree(ornaments, height) {

    const filas = [];
    const padValue = height - 1;
  
    filas[0] = ' '.repeat(padValue) + ornaments[0];
    filas[height] = ' '.repeat(padValue) + '|';
  
    let paint = '';
    let tempHeight = 2;
    let ornamentsIndex = ornaments.length <= 1 ? 0 : 1;
  
    for (let i = 1; i < height; i++) {
  
      for (let j = 0; j < tempHeight; j++) {
        paint += ` ${ornaments[ornamentsIndex]}`;
        ornamentsIndex = (ornamentsIndex + 1) % ornaments.length;
      }
  
      tempHeight++;
  
      filas[i] = paint.padStart(height + i, ' ');
      paint = '';
    }
  
    filas[height - 1] = filas[height - 1].slice(1);
  
    return filas.join('\n').concat('\n');
  } 

console.log(createChristmasTree("x", 3));
/*   
   1
  2 3
 1 2 3
1 2 3 1
   |*/