import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdDataService } from './services/ad.data.service';
import { AdFactoryService } from './services/ad.factory.service';

import { createControlConfig, createRowsItems } from './shared/utils';

import { AdFormRows } from './models/ad-form-rows';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  form: FormGroup;
  adForm: AdFormRows;

  constructor(private dataService: AdDataService, private factoryService: AdFactoryService, private formBuilder: FormBuilder) {
    this.displayFieldCss = this.displayFieldCss.bind(this);
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  ngOnInit() {
    const dataFormDesc = this.dataService.getCustomFormDescription();

    this.adForm = {
      legendLabel: dataFormDesc.legendLabel,
      submitLabel: dataFormDesc.submitLabel,
      rows: createRowsItems(dataFormDesc.customRows, this.factoryService)
    } as AdFormRows;


    // https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular
    
    this.form = this.formBuilder.group(createControlConfig(dataFormDesc));
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value));
  }

  reset() {
    console.log(JSON.stringify(this.form.value));
    this.form.reset();
  }

  getClass(nbreComponent: number) {
    return 'col-md-' + (12 / nbreComponent).toString();
  }

  displayFieldCss(field: string) {
    return { 'is-invalid': !this.form.get(field).valid && this.form.get(field).touched };
  }
}
