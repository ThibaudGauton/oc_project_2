import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatBoxComponent } from "../stat-box/stat-box.component";
import { async, Observable, ReplaySubject } from "rxjs";
import { Olympic } from "../../models/Olympic";
import { LoaderComponent } from "../loader/loader.component";
import { NgForOf, NgIf } from "@angular/common";
import { Participation } from "../../models/Participation";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit {
  @Input() public olympics$!: Observable<Olympic[]>;
  @Output() selectedCountry = new EventEmitter<Olympic>();

  public numberOfJO!: number;
  public numberOfCountries!: number;
  public isReady = false;

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
  }

  openDetailCountry(olympic: Olympic) {
    this.selectedCountry.emit(olympic);
  }
}
