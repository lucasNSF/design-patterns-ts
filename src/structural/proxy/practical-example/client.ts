import { Firewall } from './Firewall';
import { HttpProtocol } from './HttpProtocol';
import { Internet } from './Internet';

const internet = new Internet();

class HomeRouter {
  constructor(private readonly protocol: HttpProtocol) {}

  accessSites() {
    this.protocol.request('http://evil.com', 'GET', () =>
      console.log('Oh no, I was hacked :('),
    );

    this.protocol.request('http://test.com', 'GET', () =>
      console.log('request to test done!'),
    );

    this.protocol.request('http://google.com', 'GET', () =>
      console.log('request to google done!'),
    );
  }
}

const neighborRouter = new HomeRouter(internet);
const myHomeRouter = new HomeRouter(new Firewall(internet));

neighborRouter.accessSites();
console.log('---------------------------');
myHomeRouter.accessSites();
