import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Olympic } from "../../core/models/Olympic";
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Olympic[]> = of([]);
  public selectedOlympic$!: Observable<Olympic|null>;
  public errorMessage!: string;

  constructor(
    private olympicService: OlympicService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.errorMessage = '';
    this.olympics$ = this.olympicService
      .getOlympics()
      .pipe(
        map(olympics => olympics ? olympics : []),
        tap(olympics => {
          this.errorMessage = olympics.length === 0 ? 'Could not load data' : '';
          this.cdr.detectChanges();
        }),
      )
    ;

    this.selectedOlympic$ = of(null);
  }

  onOlympicSelected(olympic: Olympic | null) {
    this.selectedOlympic$ = of(olympic);
  }
}
