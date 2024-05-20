import { Component, OnInit, Input } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css'],
})
export class ResidentsComponent implements OnInit {
  @Input() residentUrls: string[] = [];
  residents: any[] = [];

  constructor(private planetSvc: PlanetsService) {}

  ngOnInit(): void {
    this.loadResidents();
  }

  private loadResidents(): void {
    this.residentUrls.forEach(url => {
      this.planetSvc.getResident(url).subscribe(resident => {
        this.residents.push(resident);
      });
    });
  }
}
