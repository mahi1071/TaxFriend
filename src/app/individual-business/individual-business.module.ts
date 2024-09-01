import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DataEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DataEntryComponent }]),
  ],
})
export class IndividualBusinessModule {}
