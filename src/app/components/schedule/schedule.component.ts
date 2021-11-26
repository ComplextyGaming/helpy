import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/models/schedule/schedule';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: any
  params: any
  expertId: any
  gameId: any
  loading: any

  constructor(private scheduleService: ScheduleService ,public router: ActivatedRoute) {
    this.router.parent?.params.subscribe(params => {
      this.params = params
    })

    this.expertId = this.params.expertId
    this.gameId = this.params.gameId
    console.log(this.expertId)
    console.log(this.gameId)
    this.schedules = [{} as Schedule]
  }

  ngOnInit(): void {
    this.getExpertById()
  }

  getExpertById(){
    this.scheduleService.getSchedulesByExpertId(this.expertId).subscribe(data => {
      this.schedules = data
      this.loading = true
      console.log(data)
    })
  }

}
