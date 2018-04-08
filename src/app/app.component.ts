import { Component, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GooleTimeZoneService } from './goole-time-zone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result;
  resultData = [];
  zoneTimeCity = [];
  resultTime;
  public cityListData = [
    {
      city: "Pondicherry",
      latitude: "11.913860",
      longitude: "79.814472",
      time: "2018-04-04T05:00:00Z"
    },
    {
      city: "Changi",
      latitude: "1.345010",
      longitude: "103.983209",
      time: "2018-04-04T05:00:00Z"
    },
    {
      city: "Melbourne",
      latitude: "-37.813628",
      longitude: "144.963058",
      time: "2018-04-04T05:00:00Z"
    },
    {
      city: "Paris",
      latitude: "48.856614",
      longitude: "2.352222",
      time: "2018-04-04T05:00:00Z"
    },
    {
      city: "London",
      latitude: "51.507351",
      longitude: "-0.127758",
      time: "2018-04-04T05:00:00Z"
    },
    {
      city: "California",
      latitude: "36.778261",
      longitude: "-119.417932",
      time: "2018-04-04T05:00:00Z"
    },
    {
      city: "Karachi",
      latitude: "25.070043",
      longitude: "67.284787",
      time: "2018-04-04T05:00:00Z"
    },
    {
      city: "Johannesburg",
      latitude: "-26.204103",
      longitude: "28.047305",
      time: "2018-04-04T05:00:00Z"
    },
    {
      city: "Mecca",
      latitude: "21.389082",
      longitude: "39.857912",
      time: "2018-04-04T05:00:00Z"
    },
    {
      city: "Frankfurt",
      latitude: "50.110922",
      longitude: "8.682127",
      time: "2018-04-04T05:00:00Z"
    }
  ]
  constructor(private gooleTimeZoneService: GooleTimeZoneService) {

  }

  ngOnInit() {
    this.getTimezone();
  }


  getTimezone() {
    let datTimeZone = this.cityListData.map(item => {
      let timestamp = (Math.round((new Date(item.time).getTime()) / 1000)).toString();
      this.gooleTimeZoneService.getTimezone(item.latitude, item.longitude, timestamp).subscribe(res => {
        this.result = res;
        var Cur_Date = new Date(item.time);
        var UTC = Cur_Date.getTime() + (Cur_Date.getTimezoneOffset() * 60000);
        var Loc_Date = new Date(UTC - (1000 * this.result.rawOffset) + (1000 * this.result.dstOffset));
        this.resultTime = Loc_Date.toLocaleString();
        this.resultData.push(this.resultTime);

      });
      console.log(this.resultData);
    });
  }



}



























