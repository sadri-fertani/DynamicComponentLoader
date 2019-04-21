import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { AdModelComponent } from '../../models/ad.component';
import { FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';

@Component({
  templateUrl: './input-checkbox-ad.component.html'
})

export class InputCheckboxAdComponent implements AdModelComponent, AfterViewInit {
  @Input() form: FormGroup;
  @Input() displayFieldCss: Function;
  @Input() controlName: string;
  @Input() required: boolean;
  @Input() label: string;
  @Input() data: any[];

  constructor() {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      ((this.form.get(this.controlName) as any).controls as any[]).forEach((ctr, i) => {
        ctr.setValue(
          {
            label: this.data[i].label,
            value: this.data[i].value,
            checked: false
          }
        );
      });
    }, 0);
  }

  onCheckboxChange(event: MatCheckboxChange) {
    const indexCurrentElement = this.data.findIndex(e => e.value === event.source.value);

    if (indexCurrentElement === -1) return;

    ((this.form.get(this.controlName) as any).controls as any[])[indexCurrentElement].setValue(
      {
        label: event.source.name,
        value: event.source.value,
        checked: event.checked
      }
    );
  }
}
