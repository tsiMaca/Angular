import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
onClick(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() planet! : any;
  @Input() index!: number;
  @Output() residentsClick = new EventEmitter<number>();
showResidents: any;
  constructor() { }

  ngOnInit(): void {
  }
  
  onResidentsClick(): void {
    this.residentsClick.emit(this.index);
  }
}
