import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expert } from 'src/app/models/expert/expert';
import { Game } from 'src/app/models/game/game';
import { HttpExpertService } from 'src/app/services/expert/http-expert.service';
import { HttpGenericService } from 'src/app/services/general/http-generic.service';



@Component({
  selector: 'app-list-experts',
  templateUrl: './list-experts.component.html',
  styleUrls: ['./list-experts.component.css']
})
export class ListExpertsComponent implements OnInit, OnDestroy {

  id: number
  params: any
  experts: any
  expertData: Expert


  constructor(private httpDataService: HttpGenericService<Game>,private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params) => {
        this.params = params
      }
    );

    this.id = this.params.id
    this.expertData = {} as Expert

    this.httpDataService.setPath("https://helpy-api-upc.herokuapp.com/api/games")
  }

  ngOnInit(): void {
    this.getAllExperts();
  }

  ngOnDestroy(): void{
  }

  getAllExperts(): void {
    this.httpDataService.getList().subscribe((response: any) => {
      this.experts = response
      console.log(this.experts)
    })
    console.log("Hola")
  }

}
