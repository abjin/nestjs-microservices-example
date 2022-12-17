import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}
  async microServicesTest() {
    const emitTest = this.client.emit('sum', [1, 1]).subscribe(console.log);

    const sendTest = await this.client
      .send({ cmd: 'sum' }, [1, 2])
      .subscribe(console.log);

    return 'hello world';
  }
}
