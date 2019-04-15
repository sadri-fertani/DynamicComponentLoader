import { FormGroup } from "@angular/forms";

export interface AdModelComponent {
  data?: any | any[];
  controlName: string;
  placeHolder?: string;
  displayFieldCss: Function;
  form: FormGroup;
}
