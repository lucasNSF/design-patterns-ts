import { HttpProtocol } from './HttpProtocol';

export class Internet implements HttpProtocol {
  async request(
    url: string,
    method: string,
    cb: () => void,
    body?: unknown,
  ): Promise<void> {
    console.log('FETCHING DATA...');
    console.log('URL: ', url);
    console.log('METHOD: ', method);

    if (body) {
      console.log('DATA SENT: ', body);
    }

    cb();
  }
}
