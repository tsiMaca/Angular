import { Component, OnInit, Input } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent implements OnInit {
  @Input() residentUrl: string | undefined;
  resident: any;

  constructor(private planetSvc: PlanetsService) { }

  ngOnInit(): void {
    if (this.residentUrl) {
      console.log(this.residentUrl);
      this.getResidentDetails(this.residentUrl);
    }
  }
  private getResidentDetails(url: string): void {
    this.planetSvc.getResident(url).subscribe((resident) => {
      this.resident = resident;
    });
  }
  
}
