import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../Modals/employee';

@Injectable({
  providedIn: 'root',
})
export class DemoService {

  private _url: string = '/assets/data/employee.json';

  constructor(private http: HttpClient) {}

  getEmployees():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
