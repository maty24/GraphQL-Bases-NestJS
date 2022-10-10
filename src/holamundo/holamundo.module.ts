import { Module } from '@nestjs/common';
import { HolamundoResolver } from './holamundo.resolver';

@Module({
  providers: [HolamundoResolver],
})
export class HolamundoModule {}
