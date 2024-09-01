import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details-of-party',
  templateUrl: './details-of-party.component.html',
  styleUrls: ['./details-of-party.component.scss'],
})
export class DetailsOfPartyComponent {
  formData: any = {};

  constructor(private router: Router, private formDataService: DataService) {}

  ngOnInit() {
    this.formData = this.formDataService.getFormData('details-of-party') || {};
  }

  onSubmit() {
    this.formDataService.setFormData('details-of-party', this.formData);
    this.router.navigate(['/profit-and-loss-account']);
  }
}
