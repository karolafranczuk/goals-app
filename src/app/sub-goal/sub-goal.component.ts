import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { SubGoal } from '../model/sub-goal';

@Component({
  selector: 'app-sub-goal',
  templateUrl: './sub-goal.component.html',
  styleUrls: ['./sub-goal.component.scss']
})
export class SubGoalComponent implements OnInit {

  items: SubGoal[]

  constructor(private service: DashboardService) {
    this.items = this.service.fetchMainGoals()[0].subgoals;
   }

  ngOnInit(): void {
  }

}
