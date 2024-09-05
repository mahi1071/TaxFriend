import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details-of-party',
  templateUrl: './details-of-party.component.html',
  styleUrls: ['./details-of-party.component.scss'],
})
export class DetailsOfPartyComponent implements OnInit {
  detailsForm!: FormGroup;
  financialYears!: string[];
  @Output() showForm = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private router: Router, private formDataService: DataService) {}

  ngOnInit(): void {
    this.financialYears = this.generateFinancialYears();
    const formData = this.formDataService.getFormData('details-of-party') || {};

    this.detailsForm = this.fb.group({
      legalName: [formData.legalName || '', Validators.required],
      proprietorName: [formData.proprietorName || '', Validators.required],
      pan: [formData.pan || '', [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      address: [formData.address || '', Validators.required],
      financialYear: [formData.financialYear || '', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.detailsForm.valid) {
      this.formDataService.setFormData('details-of-party', this.detailsForm.value);
      this.showForm.emit('profit-and-loss-account');
    } else {
      console.log('Form is invalid');
    }
  }

  generateFinancialYears(): string[] {
    const startYear = 2000;
    const currentYear = new Date().getFullYear();
    const endYear = currentYear + 1;
    const financialYears: string[] = [];

    for (let year = startYear; year < endYear; year++) {
      financialYears.push(`${year} - ${year + 1}`);
    }

    return financialYears;
  }
}
