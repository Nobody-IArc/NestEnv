import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 환경 변수 설정 관련 모듈
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';

console.log('env: ' + process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`,
    }),
    WeatherModule,
  ], // 모듈 전역 사용 설정
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
