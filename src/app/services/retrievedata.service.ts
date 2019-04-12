import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PetOwner} from '../models/pet-owner';

@Injectable({
  providedIn: 'root'
})
export class RetrievedataService {

  constructor(private _http: HttpClient) { }
  getMainList(): Observable<PetOwner[]> {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/json');

    return this._http.get<PetOwner[]>("http://agl-developer-test.azurewebsites.net/people.json", {
        headers: headers
    });
}
}
