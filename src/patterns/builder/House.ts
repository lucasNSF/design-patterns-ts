export class House {
  private rooms: number | undefined;
  private kitchens: number | undefined;
  private bedrooms: number | undefined;
  private bathrooms: number | undefined;
  private hasPool: boolean | undefined;
  private hasGarden: boolean | undefined;
  private hasGarage: boolean | undefined;

  showHouseInfo(): void {
    console.log(`Informações da casa:
Salas = ${this.rooms}
Cozinhas = ${this.kitchens}
Quartos = ${this.bedrooms}
Banheiros = ${this.bathrooms}
Tem Piscina = ${this.hasPool}
Tem Jardim = ${this.hasGarden}
Tem Garagem = ${this.hasGarage}
    `);
  }

  setRooms(total: number): void {
    this.rooms = total;
  }

  setKitchens(total: number): void {
    this.kitchens = total;
  }

  setBedrooms(total: number): void {
    this.bedrooms = total;
  }

  setBathrooms(total: number): void {
    this.bathrooms = total;
  }

  setPool(hasPool: boolean): void {
    this.hasPool = hasPool;
  }

  setGarden(hasGarden: boolean): void {
    this.hasGarden = hasGarden;
  }

  setGarage(hasGarage: boolean): void {
    this.hasGarage = hasGarage;
  }
}

export default House;
