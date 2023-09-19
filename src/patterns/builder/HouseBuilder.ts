import { Builder } from './Builder';
import House from './House';

class HouseBuilder implements Builder {
  private house: House = new House();

  reset(): this {
    this.house = new House();
    return this;
  }

  setRooms(total: number): this {
    this.house.setRooms(total);
    return this;
  }

  setKitchens(total: number): this {
    this.house.setKitchens(total);
    return this;
  }

  setBedrooms(total: number): this {
    this.house.setBedrooms(total);
    return this;
  }

  setBathrooms(total: number): this {
    this.house.setBathrooms(total);
    return this;
  }

  setPool(hasPool: boolean): this {
    this.house.setPool(hasPool);
    return this;
  }

  setGarden(hasGarden: boolean): this {
    this.house.setGarden(hasGarden);
    return this;
  }

  setGarage(hasGarage: boolean): this {
    this.house.setGarage(hasGarage);
    return this;
  }

  getHouse(): House {
    const { house } = this;
    this.reset();
    return house;
  }
}

export default HouseBuilder;
