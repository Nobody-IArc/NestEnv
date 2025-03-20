import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 환경 변수 설정 관련 모듈
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import config from './configs/configs';

console.log('env: ' + process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역 사용
      envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`, // 환경 경로
      load: [config], // Custom 파일 설정
    }),
    WeatherModule,
  ], // 모듈 전역 사용 설정
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
