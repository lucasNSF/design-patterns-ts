import { Proxy } from './Proxy';
import { Service } from './Service';
import { ServiceInterface } from './ServiceInterface';

function exec(service: ServiceInterface) {
  service.operation();
}

const service = new Service();
const serviceProxy = new Proxy(service);

exec(serviceProxy);
