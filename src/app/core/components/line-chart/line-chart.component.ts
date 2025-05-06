import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Olympic } from "../../models/Olympic";
import {filter, map, Observable} from 'rxjs';
import {LineChartData} from '../../models/LineChartData';
import {PieChartData} from '../../models/PieChartData';
import {Participation} from '../../models/Participation';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() public olympic$!: Observable<Olympic|null>;
  @Output() public return = new EventEmitter<null>();

  public lineChartData$!: Observable<LineChartData[]>;

  public numberOfMedals: number = 0;
  public numberOfEntries: number = 0;
  public numberOfAthletes: number = 0;
  public title: string = '';
  public xAxisLabel: string = 'Dates';
  windowWidth = window.innerWidth * 0.90;

  public isReady = false;
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit(): void {
    this.olympic$.subscribe(olympic => {
      if (olympic !== null) {
        this.title = olympic.country;
        for (const participation of olympic.participations) {
          this.numberOfAthletes += participation.athleteCount;
          this.numberOfMedals += participation.medalsCount;
          this.numberOfEntries ++;
        }
      } else {
        this.goBack();
      }
      this.isReady = true;
    });

    this.lineChartData$ = this.getLineChartData();
  }

  getLineChartData(): Observable<LineChartData[]> {
    return this.olympic$.pipe(
      filter((olympic): olympic is Olympic => olympic !== null),
      map((olympic: Olympic) => [
        {
          name: olympic.country,
          series: olympic.participations.map(part => ({
            name: part.year.toString(),
            value: part.medalsCount
          }))
        }
      ])
    );
  }

  goBack() {
    this.return.emit(null);
  }
}
