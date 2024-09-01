import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss'],
})
export class BalanceSheetComponent {
  formData: any = {};

  constructor(private router: Router, private formDataService: DataService) {}

  ngOnInit() {
    this.formData = this.formDataService.getFormData('balance-sheet') || {};
  }

  onSubmit() {
    this.formDataService.setFormData('balance-sheet', this.formData);
    this.router.navigate(['/preview']);
  }
}
