import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryPreviewComponent } from './data-entry-preview.component';

describe('DataEntryPreviewComponent', () => {
  let component: DataEntryPreviewComponent;
  let fixture: ComponentFixture<DataEntryPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
