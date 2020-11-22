import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = '/api'

  constructor(
    private http:HttpClient,
  ) { }

  public addUser(body= {}):Promise<any>{
    return this.http.post(`${this.API_URL}/user`,body).toPromise();
  }
}
