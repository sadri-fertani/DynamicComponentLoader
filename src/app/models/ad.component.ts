import { FormGroup } from "@angular/forms";

export interface AdModelComponent {
  data: any | any[];
  Id: string;
  displayFieldCss: Function;
  form?: FormGroup;
}
