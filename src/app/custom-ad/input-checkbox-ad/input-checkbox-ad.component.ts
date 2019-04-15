import { Component, Input } from '@angular/core';
import { AdModelComponent } from '../../models/ad.component';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './input-checkbox-ad.component.html'
})

export class InputCheckboxAdComponent implements AdModelComponent {
  @Input() form: FormGroup;
  @Input() displayFieldCss: Function;
  @Input() controlName: string;
  @Input() required: boolean;
  @Input() label: string;
  @Input() data: any[];
}