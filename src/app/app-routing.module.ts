import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingMainComponent } from './training-main/training-main.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'category/:categoryId',
    component: TrainingMainComponent
  },
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TrainingMainComponent];
