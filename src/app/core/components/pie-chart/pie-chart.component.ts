import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {filter, map, Observable, of} from "rxjs";
import { Olympic } from "../../models/Olympic";
import { Color, ScaleType } from "@swimlane/ngx-charts";
import { LegendPosition } from "@swimlane/ngx-charts/lib/common/types/legend.model";
import {PieChartData} from '../../models/PieChartData';
import {Participation} from '../../models/Participation';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() public olympics$!: Observable<Olympic[]>;
  @Output() selectedCountry = new EventEmitter<Olympic>();

  public MAX_LABEL_LENGTH = 20;
  public numberOfJO!: number;
  public numberOfCountries!: number;
  public isReady = false;
  title: string = 'Medals per country';

  pieChartData$: Observable<PieChartData[]> = of([]);
  windowWidth = window.innerWidth * 0.90;

  public colorScheme: Color = {
    domain: ['#793d52', '#89a1db', '#9780a1', '#bfe0f1', '#b8cbe7', '#956065'],
    name: 'custom',
    group: ScaleType.Linear,
    selectable: true,
  }

  constructor() {
  }

  ngOnInit(): void {
    this.olympics$.subscribe(olympics => {
      if (olympics === null) {
        return;
      }
      this.numberOfCountries = olympics.length;
      let maxNumberOfJO = 0;
      for (const olympic of olympics) {
        maxNumberOfJO = olympic.participations.length > maxNumberOfJO ? olympic.participations.length : maxNumberOfJO;
      }
      this.numberOfJO = maxNumberOfJO;
      this.isReady = true;
    });

    this.pieChartData$ = this.getPieChartData();
  }

  getPieChartData(): Observable<PieChartData[]> {
    return this.olympics$.pipe(
      map((olympics: Olympic[]) => olympics.map((olympic: Olympic) => {
        let totalMedals = 0;
        olympic.participations.forEach((p: Participation) => {
          totalMedals += p.medalsCount;
        });
        return {
          name: olympic.country,
          value: totalMedals,
          olympic: olympic
        };
      })),
    );
  }

  onChartClick(data: PieChartData): void {
    this.olympics$.pipe(
      map((olympics) => olympics.find(o => o.country === data.name))
    ).subscribe((olympic) => {
      if (olympic) {
        this.selectedCountry.emit(olympic);
      }
    });
  }
}
