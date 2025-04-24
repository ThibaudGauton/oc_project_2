import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from "rxjs";
import { Olympic } from "../../models/Olympic";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {
  @Input() public olympic!: Olympic;
  @Output() public return = new EventEmitter<null>();

  public numberOfMedals: number = 0;
  public numberOfEntries: number = 0;
  public numberOfAthletes: number = 0;

  public isReady = false;

  ngOnInit(): void {
    this.numberOfMedals = 0;
    this.numberOfEntries = 0;
    this.numberOfAthletes = 0;
    for (const participation of this.olympic.participations) {
      this.numberOfAthletes += participation.athleteCount;
      this.numberOfMedals += participation.medalsCount;
      this.numberOfEntries ++;
    }

    this.isReady = true;
  }

  goBack() {
    this.return.emit(null);
  }
}
