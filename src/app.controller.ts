import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  @Get()
  getHello(): string {
    return this.configService.get('MESSAGE') ?? 'No Message';
  }

  @Get('service-url')
  getServiceUrl(): string {
    return this.configService.get('SERVICE_URL') ?? '/';
  }

  @Get('db-info')
  getTest(): string {
    console.log(this.configService.get('logLevel'));
    console.log(this.configService.get('apiVersion'));
    return <string>this.configService.get('dbInfo');
  }
}
