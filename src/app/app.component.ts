import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdService } from './services/ad.service';
import { AdRowItems } from './models/ad-row-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  form: FormGroup;
  myTab: AdRowItems[];

  constructor(private adService: AdService, private formBuilder: FormBuilder) {
    this.displayFieldCss = this.displayFieldCss.bind(this);
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  ngOnInit() {
    this.myTab = [
      {
        nbreComponent: 3,
        lstComponent: this.adService.getAdsGrp1()
      },
      {
        nbreComponent: 2,
        lstComponent: this.adService.getAdsGrp2()
      },
      {
        nbreComponent: 1,
        lstComponent: this.adService.getAdsGrp3()
      }
    ];

    this.form = this.formBuilder.group({
      hero1: ['', Validators.required],
      hero2: ['', Validators.required],
      hero3: ['', Validators.required],
      herojob1: ['', Validators.required],
      herojob2: ['', Validators.required],
      country: ['', Validators.required]
    });
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
