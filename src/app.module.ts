import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 환경 변수 설정 관련 모듈
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })], // 모듈 전역 사용 설정
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
