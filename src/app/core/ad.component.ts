import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from '../models/ad-item';
import { AdModelComponent } from '../models/ad.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad',
  template: `<ng-template ad-host></ng-template>`
})
export class AdComponent implements OnInit {
  @Input() ads: AdItem;
  @Input() displayFieldCss: Function;
  @Input() form: FormGroup;

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
    (<AdModelComponent>componentRef.instance).controlName = this.ads.controlName;
    (<AdModelComponent>componentRef.instance).displayFieldCss = this.displayFieldCss;
    (<AdModelComponent>componentRef.instance).form = this.form;
  }
}
