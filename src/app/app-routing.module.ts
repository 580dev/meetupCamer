import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadingComponent } from './landing/leading.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakerComponent } from './speaker/speaker.component';

const routes: Routes = [
  {
    path: "",
    component: LeadingComponent
  },
  {
    path: "schedule",
    component: ScheduleComponent
  },
  {
    path: "speakers",
    component: SpeakerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
