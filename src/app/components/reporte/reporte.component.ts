import { Component, OnInit } from '@angular/core';
import { HttpReporteService } from 'src/app/services/reporte/http-reporte.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  tipo: string = 'line';
  chart: any;
  pdfSrc!: string;
  
  constructor(private reporteService: HttpReporteService) { }

  ngOnInit(): void {
    this.dibujar();
  }
  
  cambiar(tipo: string) {
    this.tipo = tipo;
    if (this.chart != null) {
      this.chart.destroy();
    }
    this.dibujar();
  }

  dibujar() {
    this.reporteService.listarResumen().subscribe(data => {
      let cantidades = data.map(x => x.cantidad);
      let games = data.map(x => x.game);

      console.log(data)

      this.chart = new Chart('canvas', {
        type: this.tipo,
        data: {
          labels: games,
          datasets: [
            {
              label: 'Cantidad',
              data: cantidades,
              borderColor: "#3cba9f",
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 0, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ]
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });

    });
  }

 //pdfs//
 generarReporte() {
  this.reporteService.generarReporte().subscribe((data) => {
    let reader = new FileReader(); //archivo en memoria
    console.log(data);
    reader.onload = (e: any) => {
      this.pdfSrc = e.target.result; //retornar el contenido
      console.log(this.pdfSrc);
    };
    reader.readAsArrayBuffer(data);
  });
}
}
