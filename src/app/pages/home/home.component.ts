import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Olympic } from "../../core/models/Olympic";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Olympic[]> = of([]);
  public selectedOlympic!: Olympic|null;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService
      .getOlympics()
      .pipe(
        map(olympics => olympics ? olympics : []),
      )
    ;

    this.selectedOlympic = null;
  }

  public selectOlympic(olympic: Olympic|null) {
    this.selectedOlympic = olympic;
  }
}
