import { Component } from '@angular/core';

@Component({
  selector: 'app-individual-business',
  templateUrl: './individual-business.component.html',
  styleUrls: ['./individual-business.component.scss'],
})
export class IndividualBusinessComponent {
  currentForm: string = 'details-of-party';
  showForm(text: string) {
    this.currentForm = text;
  }
}
