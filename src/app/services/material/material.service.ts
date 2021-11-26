import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { Material } from 'src/app/models/material/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

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

  getListMaterialsByExpertId(id: Number): Observable<Material>{
    return this.http.get<Material>(`https://helpy-api-upc.herokuapp.com/api/materials/expert/${id}`).pipe(retry(2), catchError(this.handleError))
  }

}
