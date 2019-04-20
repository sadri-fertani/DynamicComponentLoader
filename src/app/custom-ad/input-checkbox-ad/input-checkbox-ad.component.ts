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

  onCheckboxChange(event) {
    const indexCurrentElement = this.data.findIndex(e => e.value === event.target.value);
    
    if (indexCurrentElement === -1) return;

    ((this.form.get(this.controlName) as any).controls as any[])[indexCurrentElement].setValue(
      {
        label: event.target.name,
        value: event.target.value,
        checked: event.target.checked
      }
    );
  }
}
