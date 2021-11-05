import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expert } from 'src/app/models/expert/expert';
import { HttpGenericService } from '../../services/general/http-generic.service'


@Component({
  selector: 'app-detailexpert',
  templateUrl: './detailexpert.component.html',
  styleUrls: ['./detailexpert.component.css']
})
export class DetailexpertComponent implements OnInit {

  params: any
  expertId: number

  constructor(private httpGenericService: HttpGenericService<Expert>,
              private router: ActivatedRoute) {

    this.router.params.subscribe(
      (params) => {
        this.params = params
      }
    )

    this.expertId = this.params.expertId
    this.httpGenericService.setPath("https://helpy-api-upc.herokuapp.com/api/experts")
  }

  ngOnInit(): void {
  }

}
