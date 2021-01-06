// 컨트롤러는 들어오는 요청 을 처리 하고 클라이언트에 응답을 반환 합니다.
// 컨트롤러의 목적은 특정 요청을 받는 것이다. 라우팅 방식이 컨트롤러가 요청을 받는 방식을 조정한다.
// 하나의 컨트롤러는 여러 경로를 가질 수 있으며, 경로에 따라 다른 작업을 수행한다.
// 우리는 기본 컨트롤러를 생성하기 위해 클래스와 데코레이터를 사용한다.
// 데코레이터: 클래스를 메타데이터와 연결, NEST가 라우팅 맵을 만들도록 함(요청을 컨트롤러에 연결)

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // 기본 컨트롤러를 정의하는 데에 필요
export class AppController {
  constructor(private readonly appService: AppService) {}
  // 기본 경로를 설정하는 것
  // 괄호 안에 path를 지정할 수 있음

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// To create a controller using the CLI, simply execute the $ nest g controller cats command.
