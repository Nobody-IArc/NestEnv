import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('weather')
export class WeatherController {
  constructor(private configService: ConfigService) {}

  @Get()
  public getWeather(): string {
    const apiUrl: string =
      this.configService.get('WEATHER_API_URL') ?? 'No Message';
    const apiKey: string =
      this.configService.get('WEATHER_API_KEY') ?? 'No Message';

    return this.callWeatherApi(apiUrl, apiKey);
  }

  private callWeatherApi(apiUrl: string, apiKey: string): string {
    console.log('Calling weather...');
    console.log(apiUrl);
    console.log(apiKey);
    return 'Weather';
  }
}
