import { Component, Input } from '@angular/core';
import { AdModelComponent } from 'src/app/models/ad.component';
import { FormGroup } from '@angular/forms';

@Component({
    templateUrl: './input-date-ad.component.html',
})

export class InputDateAdComponent implements AdModelComponent {
    @Input() form: FormGroup;
    @Input() displayFieldCss: Function;
    @Input() controlName: string;
    @Input() required: boolean;
    @Input() label: string;
    @Input() data: any[];
}
