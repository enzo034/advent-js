function cyberReindeer(road, time) {

    const result = [road];
    let actualPos = '.'

    for (let i = 1; i < time; i++) {
        if (i === 5) road = road.replaceAll('|', '*');
        
        const m = road.match(/S[\*\.]/g);

        if(m){
            road = road.replace(m[0], actualPos + 'S');
            actualPos = m[0][1];
        }

        result.push(road);
    }

    return result;
}

const result = cyberReindeer('S..|...|..', 10)
console.log(result);
/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/