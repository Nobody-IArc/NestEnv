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
}
