import { Component, Input } from '@angular/core';
import { AdModelComponent } from '../../models/ad.component';

@Component({
  templateUrl: './hero-job-ad.component.html'
})

export class HeroJobAdComponent implements AdModelComponent {
  @Input() data: any;
}
