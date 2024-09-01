import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private formData: any = {};

  setFormData(step: string, data: any) {
    this.formData[step] = data;
  }

  getFormData(step: string) {
    return this.formData[step];
  }

  getAllFormData() {
    return this.formData;
  }
}
