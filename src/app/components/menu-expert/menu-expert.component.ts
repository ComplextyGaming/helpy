import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expert } from 'src/app/models/expert/expert';
import { HttpGenericService } from 'src/app/services/general/http-generic.service';

@Component({
  selector: 'app-menu-expert',
  templateUrl: './menu-expert.component.html',
  styleUrls: ['./menu-expert.component.css']
})
export class MenuExpertComponent implements OnInit {

  params: any
  expertId: number
  gameId: number
  loading: any

  constructor(private httpGenericService: HttpGenericService<Expert>,
              public router: ActivatedRoute) {

    this.router.parent?.params.subscribe(params => {
      this.params = params
    })

    this.expertId = this.params.expertId
    this.gameId = this.params.gameId
    this.httpGenericService.setPath("https://helpy-api-upc.herokuapp.com/api/experts")
  }

  ngOnInit(): void {
    this.loading = true
  }
}
