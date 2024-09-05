import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss'],
})
export class BalanceSheetComponent {
  balancesheetForm!: FormGroup;
  @Output() showForm = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private formDataService: DataService) {}

  ngOnInit() {
    const formData = this.formDataService.getFormData('balance-sheet') || {};

    this.balancesheetForm = this.fb.group({
      opening: [formData.opening || '', Validators.required],
      drawing: [formData.drawing],
      otherIncomeNotReportedInProfitAndLossAccount: [formData.otherIncomeNotReportedInProfitAndLossAccount],
      loanOutstanding: [formData.loanOutstanding || ''],
      sundryCreditor: [formData.sundryCreditor || ''],
      fixedAssetBalance: [formData.fixedAssetBalance || '', Validators.required],
      closingBalanceAtBank: [formData.closingBalanceAtBank || '', Validators.required],
      cashInHand: [formData.cashInHand || '', Validators.required],
      sundryDebtor: [formData.sundryDebtor || ''],
      otherAsset: [formData.otherAsset || ''],
      bankDetails: this.fb.array([]),
    });
  }

  get bankDetails(): FormArray {
    return this.balancesheetForm.get('bankDetails') as FormArray;
  }

  addNewBankDetails() {
    const newBankDetails = this.fb.group({
      bankName: [''],
      balance: [''],
    });

    this.bankDetails.push(newBankDetails);
  }

  removeBankDetails(index: number) {
    this.bankDetails.removeAt(index);
  }

  onSubmit() {
    if (this.balancesheetForm.valid) {
      this.formDataService.setFormData('balance-sheet', this.balancesheetForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  goBack() {
    this.showForm.emit('profit-and-loss-account');
  }
}
