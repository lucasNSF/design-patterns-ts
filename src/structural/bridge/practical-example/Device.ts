export interface Device {
  mute(): void;

  volumeUp(step: number): void;

  volumeDown(step: number): void;

  setChannel(channel: number): void;

  getChannel(): number;
}
