import Director from './Director';
import HouseBuilder from './HouseBuilder';

((director: Director) => {
  const builder = new HouseBuilder();
  director.setBuilder(builder);

  // Construindo uma casa simples
  director.buildSimpleHouse();
  builder.getHouse().showHouseInfo();

  // Construindo uma mansão
  director.buildMansion();
  builder.getHouse().showHouseInfo();
})(new Director());
