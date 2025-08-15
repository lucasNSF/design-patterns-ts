import { RoundHole } from './RoundHole';
import { RoundPeg } from './RoundPeg';
import { SquarePeg } from './SquarePeg';
import { SquarePegAdapter } from './SquarePegAdapter';

function calculateArea(peg: RoundPeg): number {
  return Math.PI * peg.getRadius() ** 2;
}

const roundHoleArea = calculateArea(new RoundHole(10));
const squarePegArea = calculateArea(new SquarePegAdapter(new SquarePeg(10)));

console.log('roundHoleArea: ', roundHoleArea);
console.log('squarePegArea: ', squarePegArea);
