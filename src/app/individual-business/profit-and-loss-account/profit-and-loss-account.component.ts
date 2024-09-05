import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profit-and-loss-account',
  templateUrl: './profit-and-loss-account.component.html',
  styleUrls: ['./profit-and-loss-account.component.scss'],
})
export class ProfitAndLossAccountComponent {
  financialForm!: FormGroup;
  @Output() showForm = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private formDataService: DataService) {}

  ngOnInit() {
    const formData = this.formDataService.getFormData('profit-and-loss-account') || {};

    this.financialForm = this.fb.group(
      {
        openingStock: [formData.openingStock || '', Validators.required],
        closingStock: [formData.closingStock || '', Validators.required],
        sales: [formData.sales || '', Validators.required],
        otherDirectIncomes: [formData.otherDirectIncomes || ''],
        purchase: [formData.purchase || ''],
        otherDirectExpenses: [formData.otherDirectExpenses || ''],
        grossProfit: [formData.grossProfit || ''],
        grossProfitPercentage: [formData.grossProfitPercentage || ''],
        businessVisitCommissions: [formData.businessVisitCommissions || ''],
        depreciation: [formData.depreciation || ''],
        interestOnLoan: [formData.interestOnLoan || ''],
        insuranceCommission: [formData.insuranceCommission || ''],
        netProfit: [formData.netProfit || ''],
        netProfitPercentage: [formData.netProfitPercentage || ''],
      },
      { validators: [this.grossProfitOrPercentageValidator, this.netProfitOrPercentageValidator] }
    );
  }

  grossProfitOrPercentageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const grossProfit = control.get('grossProfit');
    const grossProfitPercentage = control.get('grossProfitPercentage');

    if (!grossProfit?.value && !grossProfitPercentage?.value) {
      return { grossProfitOrPercentageRequired: true };
    }

    return null;
  }

  netProfitOrPercentageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const netProfit = control.get('netProfit');
    const netProfitPercentage = control.get('netProfitPercentage');

    if (!netProfit?.value && !netProfitPercentage?.value) {
      return { netProfitOrPercentageRequired: true };
    }

    return null;
  }

  onSubmit() {
    if (this.financialForm.valid) {
      this.formDataService.setFormData('profit-and-loss-account', this.financialForm.value);
      this.showForm.emit('balance-sheet');
    } else {
      console.log('Form is invalid');
    }
  }

  goBack() {
    this.showForm.emit('details-of-party');
  }
}
