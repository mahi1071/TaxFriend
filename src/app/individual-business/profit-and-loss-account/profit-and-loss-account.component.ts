import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profit-and-loss-account',
  templateUrl: './profit-and-loss-account.component.html',
  styleUrls: ['./profit-and-loss-account.component.scss'],
})
export class ProfitAndLossAccountComponent {
  formData: any = {};

  constructor(private router: Router, private formDataService: DataService) {}

  ngOnInit() {
    this.formData =
      this.formDataService.getFormData('profit-and-loss-account') || {};
  }

  onSubmit() {
    this.formDataService.setFormData('profit-and-loss-account', this.formData);
    this.router.navigate(['/balance-sheet']);
  }
}
