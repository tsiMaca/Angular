import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  planets: any[] = [];

  constructor(private planetSvc: PlanetsService, private router: Router) {}

  ngOnInit(): void {
    this.getPlanets();
  }

  private getPlanets(): void {
    //Todo:dessucrirbirte
    this.planetSvc
      .getPlanets()
      .pipe(
        tap((planets: any) => {
          this.planets = planets.results;
        })
      )
      .subscribe((res: any) => {
       
      });
      
  }
  onResidentsClick(planetIndex: number): void {
    this.router.navigate(['/planets/residents', planetIndex]);
  }
}

