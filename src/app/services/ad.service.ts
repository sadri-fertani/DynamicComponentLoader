import { Injectable } from '@angular/core';

import { InputAdComponent } from '../custom-ad/input-ad/input-ad.component';
import { SelectAdComponent } from '../custom-ad/select-ad/select-ad.component';

import { AdItem } from '../models/ad-item';

@Injectable()
export class AdService {
  getAdsGrp1() {
    return [
      new AdItem(InputAdComponent, 'First name', 'firstName'),
      new AdItem(InputAdComponent, 'Last name', 'lastName')
    ];
  }

  getAdsGrp2() {
    return [
      new AdItem(InputAdComponent, 'City', 'city'),
      new AdItem(SelectAdComponent, 'State', 'state', [
        { name: '', label: '' },
        { name: 'Arizona', label: 'AZ' },
        { name: 'California', label: 'CA' },
        { name: 'Colorado', label: 'CO' },
        { name: 'New York', label: 'NY' },
        { name: 'Pennsylvania', label: 'PA' },
      ]
      ),
      new AdItem(InputAdComponent, 'Zip', 'zip'),
    ];
  }

  getAdsGrp3() {
    return [
      new AdItem(InputAdComponent, 'E-mail', 'email', null)
    ];
  }
}
