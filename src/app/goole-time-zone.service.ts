import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GooleTimeZoneService {

  constructor(private http: HttpClient) { }
  getTimezone(lat,lng,timestamp) {
    const uri = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + lat + ',' + lng + '&timestamp='+timestamp+'&key=AIzaSyCxKmcOv0t-oy2C1LzWjR7nkT5W2vQRsMM';
    console.log(uri);
    return this
      .http
      .get(uri)
      .map(res => res);
  }
}


// getTimezone(lat, lng) {
//   return this.http.get('https://maps.googleapis.com/maps/api/timezone/json?location=' + lat + ',' + lng + '&timestamp=1458000000&key=AIzaSyCxKmcOv0t-oy2C1LzWjR7nkT5W2vQRsMM')
//       .map(res => res.json());
// }
