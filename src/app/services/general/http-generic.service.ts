import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Game } from 'src/app/models/game/game';

@Injectable({
  providedIn: 'root'
})
export class HttpGenericService<T> {

  private basePath = ""

  constructor(private http: HttpClient) { }

  setPath(url: string){
    this.basePath = url;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse): Observable<never>{
    if(error.error instanceof ErrorEvent){
      console.log('An error ocurred: ', error.error.message)
    }
    else{
      console.log(`Backend returned code: ${error.status}, body was: ${error.error}`)
    }
    return throwError('Something happened with request')
  }

  createItem(item: T): Observable<T>{
    return this.http.post<T>(this.basePath, JSON.stringify(item), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  getList(): Observable<T>{
    return this.http.get<T>(this.basePath).pipe(retry(2), catchError(this.handleError));
  }
}
