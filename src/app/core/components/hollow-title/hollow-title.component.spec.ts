import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollowTitleComponent } from './hollow-title.component';

describe('HollowTitleComponent', () => {
  let component: HollowTitleComponent;
  let fixture: ComponentFixture<HollowTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HollowTitleComponent]
    });
    fixture = TestBed.createComponent(HollowTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
