const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition (moves) {
  let xaxis = 0;
  let yaxis = 0;
  for (let count = 0; count < moves.length; count + 1 ) {
    if (moves[count] === 'north') {
      yaxis += 1;
      count += 1;
    } else if (moves[count] === 'south') {
      yaxis -= 1;
      count += 1;
    } else if (moves[count] === 'east') {
      xaxis += 1;
      count += 1;
    } else if (moves[count] === 'west') {
      xaxis -= 1;
      count += 1;
    } else {
      count += 1;
    }
    console.log(moves[count]);
  } let coordinates = [xaxis,yaxis];
  return coordinates;
}

console.log(finalPosition(moves));