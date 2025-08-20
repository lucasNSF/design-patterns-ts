import { AudioMixer } from './AudioMixer';
import { BitrateReader } from './BitrateReader';
import { VideoFile } from './VideoFile';

export class VideoConverter {
  private readonly audioMixer = new AudioMixer();
  private readonly videoFile = new VideoFile();
  private readonly bitrateReader = new BitrateReader();

  convertVideo(filename: string, format: string) {
    console.log(`converting ${filename} to ${format}...`);

    this.videoFile.create();
    this.bitrateReader.read();
    this.audioMixer.mix();
  }
}
