import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AdComponent } from './core/ad.component';
import { AdDirective } from './core/ad.directive';

import { HeroJobAdComponent } from './custom-ad/hero-job-ad/hero-job-ad.component';
import { HeroProfileAdComponent } from './custom-ad/hero-profile-ad/hero-profile-ad.component';
import { ForFunAdComponent } from './custom-ad/for-fun-ad/for-fun-ad.component';

import { AdService } from './services/ad.service';

@NgModule({
  imports: [BrowserModule],
  providers: [AdService],
  declarations: [AppComponent,
    AdComponent,
    HeroJobAdComponent,
    HeroProfileAdComponent,
    ForFunAdComponent,
    AdDirective],
  entryComponents: [HeroJobAdComponent, HeroProfileAdComponent, ForFunAdComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
