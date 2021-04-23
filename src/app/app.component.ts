import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19tracker';
  BannerDataList: any;
  BannerData: string = 'As a human being. This is small contribution to society.';
  storeBannerSub: BehaviorSubject<any> = new BehaviorSubject("");

  constructor(){}
  
}
