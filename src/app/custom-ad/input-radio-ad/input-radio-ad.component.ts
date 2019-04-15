import { Component, Input } from '@angular/core';
import { AdModelComponent } from '../../models/ad.component';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './input-radio-ad.component.html'
})

export class InputRadioAdComponent implements AdModelComponent {
  @Input() form: FormGroup;
  @Input() displayFieldCss: Function;
  @Input() controlName: string;
  @Input() required: boolean;
  @Input() label: string;
  @Input() data: any[];
}
