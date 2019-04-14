import { Component, Input } from '@angular/core';
import { AdModelComponent } from '../../models/ad.component';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './input-ad.component.html'
})

export class InputAdComponent implements AdModelComponent {
  @Input() form: FormGroup;
  @Input() displayFieldCss: Function;
  @Input() data: any;
  @Input() Id: string;
}
