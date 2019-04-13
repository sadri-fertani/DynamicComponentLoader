import { Component, OnInit } from '@angular/core';

import { AdService } from './services/ad.service';
import { AdRowItems } from './models/ad-row-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  myTab: AdRowItems[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.myTab = [
      {
        groupName: 'grp1',
        nbreComponent: 3,
        lstComponent: this.adService.getAdsGrp1()
      },
      {
        groupName: 'grp2',
        nbreComponent: 2,
        lstComponent: this.adService.getAdsGrp2()
      },
      {
        groupName: 'grp3',
        nbreComponent: 1,
        lstComponent: this.adService.getAdsGrp3()
      }
    ]
  }

  getClass(nbreComponent: number) {
    return 'col-md-' + (12 / nbreComponent).toString();
  }
}

