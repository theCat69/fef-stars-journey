import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl: string = `${environment.backendBaseUrl}/personwithanimals`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
