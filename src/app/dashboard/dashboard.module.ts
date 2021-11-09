import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MainGoalComponent } from '../main-goal/main-goal.component';
import { SubGoalComponent } from '../sub-goal/sub-goal.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MainGoalComponent,
    SubGoalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
