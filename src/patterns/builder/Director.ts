import { Builder } from "./Builder";

class Director {
  private builder!: Builder;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  buildSimpleHouse(): void {
    this.builder.setBathrooms(1);
    this.builder.setBedrooms(2);
    this.builder.setGarage(false);
    this.builder.setGarden(false);
    this.builder.setKitchens(1);
    this.builder.setPool(false);
    this.builder.setRooms(1);
  }

  buildMansion(): void {
    this.builder.setBathrooms(4);
    this.builder.setBedrooms(6);
    this.builder.setGarage(true);
    this.builder.setGarden(true);
    this.builder.setKitchens(3);
    this.builder.setPool(true);
    this.builder.setRooms(3);
  }
}

export default Director;
