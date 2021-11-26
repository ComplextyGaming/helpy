import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expert } from 'src/app/models/expert/expert';
import { HttpGenericService } from '../../services/general/http-generic.service';
import {MaterialService} from '../../services/material-service';


@Component({
  selector: 'app-detailexpert',
  templateUrl: './detailexpert.component.html',
  styleUrls: ['./detailexpert.component.css']
})
export class DetailexpertComponent implements OnInit {

  expert: Expert
  params: any
  expertId: any
  gameId: any
  loading: any

  constructor(private httpExpertService: HttpGenericService<Expert>, public router: ActivatedRoute) {
    this.router.params.subscribe(data => {
      this.params = data
    })

    this.httpExpertService.setPath("https://helpy-api-upc.herokuapp.com/api/experts");
    this.expertId = this.params.expertId
    this.gameId = this.params.gameId

    this.expert = {} as Expert
  }

  ngOnInit(): void {
    this.getExpertById()
  }

  getExpertById(){
    this.httpExpertService.getById(this.expertId).subscribe(data => {
      this.expert = data
      this.loading = true
    })
    console.log(this.expert)
  }
}
