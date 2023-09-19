export interface Builder {
  reset(): this;
  setRooms(total: number): this;
  setKitchens(total: number): this;
  setBedrooms(total: number): this;
  setBathrooms(total: number): this;
  setPool(hasPool: boolean): this;
  setGarden(hasGarden: boolean): this;
  setGarage(hasGarage: boolean): this;
}
