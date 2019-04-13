import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from '../custom-ad/hero-job-ad/hero-job-ad.component';
import { HeroProfileAdComponent } from '../custom-ad/hero-profile-ad/hero-profile-ad.component';
import { ForFunAdComponent} from '../custom-ad/for-fun-ad/for-fun-ad.component';

import { AdItem } from '../models/ad-item';

@Injectable()
export class AdService {
  getAdsGrp1() {
    return [
      new AdItem(HeroProfileAdComponent, { name: 'Bombasto', bio: 'Brave as they come' }),
      new AdItem(HeroProfileAdComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),
      new AdItem(HeroJobAdComponent, { headline: 'Hiring for several positions', body: 'Submit your resume today!' })
    ];
  }

  getAdsGrp2() {
    return [
      new AdItem(ForFunAdComponent, { title: 'Sadri FERTANI' }),
      new AdItem(HeroJobAdComponent, { headline: 'Openings in all departments', body: 'Apply today' }),
    ];
  }

  getAdsGrp3() {
    return [
      new AdItem(HeroProfileAdComponent, { name: 'Bombasto', bio: 'Brave as they come' })
    ];
  }
}
