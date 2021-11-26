import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Expert } from 'src/app/models/expert/expert';
import { HttpGenericService } from 'src/app/services/general/http-generic.service';
@Component({
  selector: 'app-info-expert',
  templateUrl: './info-expert.component.html',
  styleUrls: ['./info-expert.component.css']
})
export class InfoExpertComponent implements OnInit {

  @Input() expert: any

  constructor(private htppExpertService: HttpGenericService<Expert>) {
    this.expert = {} as Expert
  }

  ngOnInit(): void {
  }
}
