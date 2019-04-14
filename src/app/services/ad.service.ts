import { Injectable } from '@angular/core';

import { InputAdComponent } from '../custom-ad/input-ad/input-ad.component';
import { SelectAdComponent } from '../custom-ad/select-ad/select-ad.component';

import { AdItem } from '../models/ad-item';

@Injectable()
export class AdService {
  getAdsGrp1() {
    return [
      new AdItem(InputAdComponent, 'Hero', 'hero1', 'hero1', { name: 'Bombasto', bio: 'Brave as they come' }),
      new AdItem(InputAdComponent, 'Hero', 'hero2', 'hero2', { name: 'Dr IQ', bio: 'Smart as they come' }),
      new AdItem(InputAdComponent, 'HeroJob', 'herojob1', 'herojob1', { headline: 'Hiring for several positions', body: 'Submit your resume today!' })
    ];
  }

  getAdsGrp2() {
    return [
      new AdItem(SelectAdComponent, 'Country', 'country', 'country', [
        { name: '', label: '' },
        { name: 'Arizona', label: 'AZ' },
        { name: 'California', label: 'CA' },
        { name: 'Colorado', label: 'CO' },
        { name: 'New York', label: 'NY' },
        { name: 'Pennsylvania', label: 'PA' },
      ]
      ),
      new AdItem(InputAdComponent, 'HeroJob', 'herojob2', 'herojob2', { headline: 'Openings in all departments', body: 'Apply today' }),
    ];
  }

  getAdsGrp3() {
    return [
      new AdItem(InputAdComponent, 'Hero', 'hero3', 'hero3', { name: 'Bombasto', bio: 'Brave as they come' })
    ];
  }
}
