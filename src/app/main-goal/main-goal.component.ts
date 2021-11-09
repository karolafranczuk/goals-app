import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { MainGoal } from '../model/main-goal';

@Component({
  selector: 'app-main-goal',
  templateUrl: './main-goal.component.html',
  styleUrls: ['./main-goal.component.scss']
})
export class MainGoalComponent implements OnInit {

  item: MainGoal;

  constructor(private service: DashboardService) {
    this.item = this.service.fetchMainGoals()[0];
   }

  ngOnInit(): void {
  }

}
