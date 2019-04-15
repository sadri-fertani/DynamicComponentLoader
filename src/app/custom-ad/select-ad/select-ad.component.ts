import { Component, Input } from '@angular/core';
import { AdModelComponent } from '../../models/ad.component';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './select-ad.component.html'
})

export class SelectAdComponent implements AdModelComponent {
  @Input() form: FormGroup;
  @Input() displayFieldCss: Function;
  @Input() data: any[];
  @Input() controlName: string;
  @Input() required: boolean;
  @Input() label: string;
}
