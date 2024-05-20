import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { ResidentsComponent } from './planet/residents/residents.component';
import { ResidentComponent } from './planet/residents/resident/resident.component';

const routes: Routes = [
{ path: '', component: PlanetsComponent },
{ path: 'residents', component: ResidentsComponent },
{ path: 'resident/:id', component: ResidentComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
