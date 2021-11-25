import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaterialResumenDTO } from 'src/app/dtos/materialeResumenDTO';

@Injectable({
  providedIn: 'root'
})
export class HttpReporteService {

  private url: string = `https://helpy-api-upc.herokuapp.com/api/materials`;

  constructor(private http: HttpClient) { }

  listarResumen() {
    return this.http.get<MaterialResumenDTO[]>(`${this.url}/listarResumen`);
  }

  generarReporte() {
    return this.http.get(`${this.url}/leerArchivo`, {
      responseType: 'blob',
    });
  }

}
