import { Component, Input } from '@angular/core';
import { AdModelComponent } from '../../models/ad.component';

@Component({
  templateUrl: './for-fun-ad.component.html'
})

export class ForFunAdComponent implements AdModelComponent {
  @Input() data: any;
}
