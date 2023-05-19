import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '66564fd5349843d199d35517231905'; 
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;
    return this.http.get(apiUrl);
  }
}