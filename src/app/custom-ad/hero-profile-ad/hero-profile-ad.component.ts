import { Component, Input }  from '@angular/core';
import { AdModelComponent }       from '../../models/ad.component';

@Component({
  templateUrl: './hero-profile-ad.component.html'
})

export class HeroProfileAdComponent implements AdModelComponent {
  @Input() data: any;
}


