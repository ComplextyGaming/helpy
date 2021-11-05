import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expert } from 'src/app/models/expert/expert';
import { HttpGenericService } from 'src/app/services/general/http-generic.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  @Input() id: any

  expert: Expert
  loadingExpert: any
  params: any

  constructor(private htppExpertService: HttpGenericService<Expert>) {
    this.expert = {} as Expert
  }

  ngOnInit(): void {
    this.getExpertById()
  }

  getExpertById(){
    this.htppExpertService.getById(this.id).subscribe(data => {
      this.expert = data
      this.loadingExpert = true
    })
  }

}
