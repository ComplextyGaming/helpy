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
  experts: Array<Expert>
  game: Game
  loadingExperts: any
  loadingGame: any


  constructor(private httpDataServiceGame: HttpGenericService<Game>,
    private httpDataExpert: HttpExpertService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params) => {
        this.params = params
      }
    );

    this.game = {} as Game
    this.experts = [{} as Expert]
    this.id = this.params.id

    this.httpDataServiceGame.setPath("https://helpy-api-upc.herokuapp.com/api/games")
  }

  ngOnInit(): void {
    this.getGameById()
    this.getExpertsByGameId()
  }

  ngOnDestroy(): void{
  }

  getExpertsByGameId(): void{
    this.httpDataExpert.getListExpertByGameId(this.id).subscribe( (response:any) => {
      this.experts = response
      this.loadingExperts = true
    })
  }

  getGameById(): void{
    this.httpDataServiceGame.getById(this.id).subscribe( (response:any) => {
      this.game = response
      this.loadingGame = true
    })
  }
}
