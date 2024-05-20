import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets.component';
import { MaterialModule } from 'src/app/material.module';
import { PlanetsRoutingModule } from './planets-routing.module';
import { ResidentsComponent } from './planet/residents/residents.component';
import { ResidentComponent } from './planet/residents/resident/resident.component';




@NgModule({
  declarations: [
    PlanetComponent,
    PlanetsComponent,
    ResidentsComponent,
    ResidentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PlanetsRoutingModule,
  ]
})
export class PlanetsModule { }
