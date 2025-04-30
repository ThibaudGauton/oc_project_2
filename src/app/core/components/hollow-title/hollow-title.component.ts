import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hollow-title',
  templateUrl: './hollow-title.component.html',
  styleUrls: ['./hollow-title.component.scss']
})
export class HollowTitleComponent {
  @Input() title!: string;

}
