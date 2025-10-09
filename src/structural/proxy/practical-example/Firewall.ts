import { HttpProtocol } from './HttpProtocol';
import { Internet } from './Internet';

export class Firewall implements HttpProtocol {
  private blockedUrls: string[] = ['http://evil.com'];

  constructor(private readonly internet: Internet) {}

  urlIsBlocked(url: string): boolean {
    return this.blockedUrls.includes(url);
  }

  blockUrl(url: string) {
    this.blockedUrls.push(url);
  }

  clearFirewallRules() {
    this.blockedUrls = [];
  }

  async request(
    url: string,
    method: string,
    cb: () => void,
    body?: unknown,
  ): Promise<void> {
    if (this.urlIsBlocked(url)) {
      console.log(`${url} blocked by firewall...`);
      return;
    }

    this.internet.request(url, method, cb, body);
  }
}
