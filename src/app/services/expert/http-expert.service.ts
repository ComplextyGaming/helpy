import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Expert } from 'src/app/models/expert/expert';

@Injectable({
  providedIn: 'root'
})
export class HttpExpertService {

  basePath = "http://localhost:8080/review"
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse): Observable<never>{
    if(error.error instanceof ErrorEvent) {
      console.log('An error ocurred: ', error.error.message)
    }
    else{
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`)
    }
    return throwError('Something happened with request')
  }

  createItem(item: Expert): Observable<Expert>{
    return this.http.post<Expert>(this.basePath, JSON.stringify(item), this.httpOptions).pipe(retry(2), catchError(this.handleError))
  }

  getItem(id: number): Observable<Expert>{
    return this.http.get<Expert>(`${this.basePath}/${id}`, this.httpOptions).pipe(retry(2), catchError(this.handleError))
  }

  getList(): Observable<Expert>{
    return this.http.get<Expert>(this.basePath).pipe(retry(2), catchError(this.handleError))
  }

}
