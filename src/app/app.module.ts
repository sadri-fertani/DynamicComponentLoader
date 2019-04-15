import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AdComponent } from './core/ad.component';
import { AdDirective } from './core/ad.directive';

import { InputAdComponent } from './custom-ad/input-ad/input-ad.component';
import { SelectAdComponent } from './custom-ad/select-ad/select-ad.component';

import { AdFactoryService } from './services/ad.factory.service';
import { AdDataService } from './services/ad.data.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    AdDataService,
    AdFactoryService
  ],
  declarations: [
    AppComponent,
    AdComponent,
    InputAdComponent,
    SelectAdComponent,
    AdDirective
  ],
  entryComponents: [
    InputAdComponent,
    SelectAdComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() { }
}
