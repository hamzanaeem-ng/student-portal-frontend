import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
    private apiUrl = 'localhost:8080'
    private _api = this.apiUrl + '/api/v1/';

    constructor(private http: HttpClient) {}

    getWithParams(route: string, params: { [key: string]: string | boolean | number }): Observable<any> {
        return this.http.get(`${this._api}${route}`, { params });
      }
    
}
