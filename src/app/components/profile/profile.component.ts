import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { User } from 'src/app/models/user';
import {HttpGenericService} from "../../services/general/http-generic.service";
import {Expert} from "../../models/expert/expert";
import {MaterialService} from "../../services/material/material.service";
import {Material} from "../../models/material/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  expert: Expert;
  user: User;
  userId: any;
  isexpert: boolean;
  cost:any;
  description: any;
  discount:any;
  materialData: Material;

  constructor(private userService: UserService,
              private materialService: MaterialService,
              private httpExpertService: HttpGenericService<Expert>,
              private router: Router) {
    this.user = {} as User;
    this.httpExpertService.setPath("https://helpy-api-upc.herokuapp.com/api/experts");
    this.userId = sessionStorage.getItem('id');
    this.expert = {} as Expert
    this.isexpert = false
    this.materialData = {} as Material
  }


  ngOnInit(): void {
    this.getUserById();
    this.getExpertById();
  }

  getUserById(): void {
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });
  }

  getExpertById(): void{
    this.httpExpertService.getById(this.userId).subscribe(data => {
      console.log(data)
      if (data.id === this.user.id) {
        this.isexpert = true
      }
      this.expert = data;
    });
  }

  navigateToMaterials(): void {
    this.router.navigate(['/home']);
  }

  createMaterial(): void {
    this.materialData.tags = [];
    console.log(this.materialData)
    this.materialService.createMaterial(this.materialData, this.expert.id, this.expert.gameId)
      .subscribe(() => {
        this.navigateToMaterials();
      });
  }

}
