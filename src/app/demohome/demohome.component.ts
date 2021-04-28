import { Component, OnInit } from '@angular/core';
import { DemoService } from '../shared/demo.service';

@Component({
  selector: 'app-demohome',
  templateUrl: './demohome.component.html',
  styleUrls: ['./demohome.component.css']
})
export class DemohomeComponent implements OnInit {

  public employees = [ ];

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this._demoService.getEmployees()
        .subscribe(data => this.employees = data);
  }

  

}
