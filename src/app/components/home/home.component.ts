import {Component, OnInit, ViewChild} from '@angular/core';
import {Expert} from "../../models/expert/expert";
import {MatTableDataSource} from "@angular/material/table";
import {HttpExpertService} from "../../services/expert/http-expert.service";
import {MatPaginator} from "@angular/material/paginator";
import {Game} from "../../models/game/game";
import {HttpGenericService} from "../../services/general/http-generic.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  experts: any;
  games: any

  constructor(
    private httpExpertService: HttpExpertService,
    private httpDataGeneric: HttpGenericService<Game>
  ) {
    this.experts = [{} as Expert];
    this.games = [{} as Game];
    this.httpDataGeneric.setPath('https://helpy-api-upc.herokuapp.com/api/games');
  }

  ngOnInit(): void {
    this.retrieveExperts();
    this.getAllList();
  }

  retrieveExperts(): void {
    this.httpExpertService.getExperts().subscribe((response: any) => {
      this.experts = response;
    });
  }

  getAllList(): void{
    this.httpDataGeneric.getList().subscribe((response: any) => {
      this.games = response;
    });
  }
}
