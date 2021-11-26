import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Expert } from 'src/app/models/expert/expert';

@Injectable({
  providedIn: 'root'
})
export class HttpExpertService {

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

  getListExpertByGameId(id: Number): Observable<Expert>{
    return this.http.get<Expert>(`https://helpy-api-upc.herokuapp.com/api/games/${id}/experts`).pipe(retry(2), catchError(this.handleError));
  }

  getExperts(): Observable<Expert[]>{
    return this.http.get<Expert[]>(`https://helpy-api-upc.herokuapp.com/api/experts`).pipe(retry(2), catchError(this.handleError));
  }

}
