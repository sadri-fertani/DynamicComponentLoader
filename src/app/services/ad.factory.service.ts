import { Injectable, Type } from '@angular/core';

import { InputAdComponent } from '../custom-ad/input-ad/input-ad.component';
import { SelectAdComponent } from '../custom-ad/select-ad/select-ad.component';

import { AdModelComponent } from '../models/ad.component';
import { CustomControlNameEnum } from '../shared/types';

@Injectable()
export class AdFactoryService {
  getAdComponent(customControlName: CustomControlNameEnum) : Type<AdModelComponent> {
    switch (customControlName) {
      case CustomControlNameEnum.Text:
        return InputAdComponent;
      case CustomControlNameEnum.List:
        return SelectAdComponent;
      default:
        throw new Error(`Custom control name : ${customControlName} are unknown`);
    }
  }
}
