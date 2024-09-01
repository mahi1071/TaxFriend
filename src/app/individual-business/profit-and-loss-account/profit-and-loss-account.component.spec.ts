import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitAndLossAccountComponent } from './profit-and-loss-account.component';

describe('ProfitAndLossAccountComponent', () => {
  let component: ProfitAndLossAccountComponent;
  let fixture: ComponentFixture<ProfitAndLossAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitAndLossAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitAndLossAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
