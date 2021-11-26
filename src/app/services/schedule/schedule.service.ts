import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Schedule } from 'src/app/models/schedule/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

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

  getSchedulesByExpertId(id: Number): Observable<Schedule>{
    return this.http.get<Schedule>(`https://helpy-api-upc.herokuapp.com/api/schedule/expert/${id}`).pipe(retry(2), catchError(this.handleError))
  }

}
