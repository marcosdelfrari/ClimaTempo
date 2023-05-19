import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  searchWeather(): void {
    this.weatherService.getWeather(this.city)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
      }, error => {
        console.error(error);
      });
  }
}
