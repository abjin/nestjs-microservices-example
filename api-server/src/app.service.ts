import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }

  async microServicesTest() {
    const emitTest = this.client.emit('sum', [1, 1]);
    const sendTest = this.client.send({ cmd: 'sum' }, [1, 1]);

    console.log({ emitTest, sendTest });

    return { emitTest, sendTest };
  }
}
