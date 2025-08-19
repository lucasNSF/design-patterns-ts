import { Circle } from './Circle';
import { CompoundGraphicalElement } from './CompoundGraphicalElement';
import { Dot } from './Dot';
import { Line } from './Line';

const graphicalInterface = new CompoundGraphicalElement({ x: 50, y: 50 });

const personDraw = new CompoundGraphicalElement({ x: 10, y: 5 });

personDraw.add('head', new Circle({ x: 0, y: 0 }));
personDraw.add('body', new Line({ x: 0, y: 5 }));
personDraw.add('arm-1', new Line({ x: -3, y: 5 }));
personDraw.add('arm-2', new Line({ x: 3, y: 5 }));
personDraw.add('leg-1', new Line({ x: -3, y: 8 }));
personDraw.add('leg-2', new Line({ x: 3, y: 8 }));

graphicalInterface.add('dot-1', new Dot({ x: 1, y: 2 }));
graphicalInterface.add('dot-2', new Dot({ x: 1, y: 2 }));
graphicalInterface.add('person', personDraw);

graphicalInterface.draw();
