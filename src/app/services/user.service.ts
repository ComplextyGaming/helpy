import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url: string = `${environment.HOST}/api/users`;
  constructor(private http: HttpClient) {}  

  getUserById(id: number){
    return this.http.get<any>(`${this.url}/${id}`)
  }

  getUserByEmail(email: string){
    return this.http.get<any>(`${this.url}/email/${email}`)
  }


}
