import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from '../models/ad-item';
import { AdModelComponent } from '../models/ad.component';

@Component({
  selector: 'app-ad',
  template: `<ng-template ad-host></ng-template>`
})
export class AdComponent implements OnInit {
  @Input() ads: AdItem;
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { 
    // Empty...
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ads.component);

    let componentRef = this.adHost.viewContainerRef.createComponent(componentFactory);
    (<AdModelComponent>componentRef.instance).data = this.ads.data;
  }
}
