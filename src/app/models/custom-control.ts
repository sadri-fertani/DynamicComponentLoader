import { CustomControlNameEnum } from "../shared/types";

export interface CustomControl {
    type: CustomControlNameEnum;
    required: boolean;
    help?: string
    label: string;
    controlName: string;
    placeHolder?: string;
    readonly?: boolean;
    defaultValue?: any;
    exchangeFormat?: string;
    data?: any | any [];
}