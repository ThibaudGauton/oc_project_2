import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-box',
  standalone: true,
  imports: [],
  templateUrl: './stat-box.component.html',
  styleUrl: './stat-box.component.scss'
})
export class StatBoxComponent {
  @Input() public label!: string;
  @Input() public value!: number;
}
