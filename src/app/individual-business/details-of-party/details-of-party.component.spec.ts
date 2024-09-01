import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfPartyComponent } from './details-of-party.component';

describe('DetailsOfPartyComponent', () => {
  let component: DetailsOfPartyComponent;
  let fixture: ComponentFixture<DetailsOfPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfPartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
