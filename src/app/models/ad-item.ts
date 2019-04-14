import { Type } from '@angular/core';

export class AdItem {
  constructor(public component: Type<any>, public label: string, public controlName: string, public required: boolean = false, public data?: any) { }
}
