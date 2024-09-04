import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualBusinessComponent } from './individual-business.component';

describe('IndividualBusinessComponent', () => {
  let component: IndividualBusinessComponent;
  let fixture: ComponentFixture<IndividualBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
