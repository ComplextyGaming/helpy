import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Material } from 'src/app/models/material/material';
import { MaterialService } from 'src/app/services/material/material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  params: any
  expertId: number
  gameId: number
  loading: any
  materials: any

  constructor(public router: ActivatedRoute, private httpMaterialService: MaterialService) {

    this.router.parent?.params.subscribe(params => {
      this.params = params
    })

    this.expertId = this.params.expertId
    this.gameId = this.params.gameId
    this.materials = [{} as Material]
    console.log(this.expertId)
    console.log(this.gameId)
   }


  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void{
    this.httpMaterialService.getListMaterialsByExpertId(this.expertId).subscribe(data => {
      this.materials = data
      this.loading = true
    });
  }
}
