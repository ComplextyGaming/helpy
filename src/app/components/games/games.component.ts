import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game/game';
import { HttpGenericService } from 'src/app/services/general/http-generic.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: any

  constructor(private httpDataGeneric: HttpGenericService<Game>) {
    this.httpDataGeneric.setPath("https://helpy-api-upc.herokuapp.com/api/games")
  }

  ngOnInit(): void {
    this.getAllList()
  }

  getAllList(){
    this.httpDataGeneric.getList().subscribe((response: any) => {
      this.games = response;
      console.log(this.games)
    })
  }

}
