import { ApiProperty } from '@nestjs/swagger';

export class GetHelloDTO {
  @ApiProperty({ type: String })
  data!: string;
}
