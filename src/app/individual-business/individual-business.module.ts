import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsOfPartyComponent } from './details-of-party/details-of-party.component';
import { ProfitAndLossAccountComponent } from './profit-and-loss-account/profit-and-loss-account.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { DataEntryPreviewComponent } from './data-entry-preview/data-entry-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsOfPartyComponent,
    ProfitAndLossAccountComponent,
    BalanceSheetComponent,
    DataEntryPreviewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'details-of-party', component: DetailsOfPartyComponent },
      {
        path: 'profit-and-loss-account',
        component: ProfitAndLossAccountComponent,
      },
      { path: 'balance-sheet', component: BalanceSheetComponent },
      { path: 'preview', component: DataEntryPreviewComponent },
      { path: '', redirectTo: '/details-of-party', pathMatch: 'full' },
    ]),
  ],
})
export class IndividualBusinessModule {}
