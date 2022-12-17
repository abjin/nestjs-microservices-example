import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    console.log('receive send success');
    console.log('data:', data);

    const result = (data || []).reduce((a, b) => a + b);
    return result;
  }

  @MessagePattern('sum')
  getDate(@Payload() data: number[], @Ctx() context: NatsContext) {
    console.log('receive emit success');
    console.log('data:', data);

    const result = (data || []).reduce((a, b) => a + b);
    return result;
  }
}
