import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(name: string, age: number) {
    return { data: `my name is ${name} and i'm ${age} years old` };
  }
}
