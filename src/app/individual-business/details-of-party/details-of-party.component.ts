import { Component, OnInit } from '@angular/core';
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
  financialYears: string[] = ['2022-2023', '2023-2024', '2024-2025'];

  constructor(private fb: FormBuilder, private router: Router, private formDataService: DataService) {}

  ngOnInit(): void {
    // this.formData = this.formDataService.getFormData('details-of-party') || {};
    this.detailsForm = this.fb.group({
      legalName: ['', Validators.required],
      proprietorName: ['', Validators.required],
      pan: ['', [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      address: ['', Validators.required],
      financialYear: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // this.formDataService.setFormData('details-of-party', this.formData);
    // this.router.navigate(['/profit-and-loss-account']);
    if (this.detailsForm.valid) {
      console.log('Form Submitted', this.detailsForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
