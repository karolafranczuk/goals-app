import { Injectable } from '@angular/core';
import { MainGoal } from '../model/main-goal';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  fetchMainGoals(): MainGoal[] {
    //get MainGoal from API
    return [
      {
        name: 'Become Angular Master',
        deadline: new Date('2021-12-30'),
        subgoals: [{
          name: 'Ended NSA Course',
          deadline: new Date('2021-12-01')
        },
        {
          name: 'Made own application in Angular',
          deadline: new Date('2021-12-30')
        }]
      }
    ]
  }
}
