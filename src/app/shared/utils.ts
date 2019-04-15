import { CustomForm } from "../models/custom-form";
import { CustomRow } from "../models/custom-row";
import { CustomControl } from "../models/custom-control";
import { Validators, AbstractControl, ValidationErrors } from "@angular/forms";
import { AdRowItems } from "../models/ad-row-items";
import { AdItem } from "../models/ad-item";
import { AdFactoryService } from "../services/ad.factory.service";
import { CustomControlNameEnum } from "./types";

export function createControlConfig(customForm: CustomForm): any {
    let config = {};

    customForm.customRows.forEach((row: CustomRow) => {
        row.customControls.forEach((ctr: CustomControl) => {
            config[ctr.controlName as any] = ['', getValidator(ctr)]
        });
    });

    return config;
}

function getValidator(ctr: CustomControl): ((control: AbstractControl) => ValidationErrors)[] {
    let validatorList = [] as ((control: AbstractControl) => ValidationErrors)[];

    switch (ctr.type) {
        case CustomControlNameEnum.Email:
            validatorList.push(Validators.email);
        default:
            break;
    }

    if (ctr.required) { validatorList.push(Validators.required); }

    if (validatorList.length === 0) { validatorList.push(Validators.nullValidator); }

    return validatorList;
}

export function createRowsItems(rows: CustomRow[], factoryService: AdFactoryService): AdRowItems[] {
    let adRows = [] as AdRowItems[];

    rows.forEach((row: CustomRow) => {
        adRows.push({
            nbreComponent: row.customControls.length,
            lstComponent: createControl(row.customControls, factoryService)
        } as AdRowItems);
    });

    return adRows;
}

function createControl(ctrls: CustomControl[], factoryService: AdFactoryService): AdItem[] {
    let adItems = [] as AdItem[];

    ctrls.forEach((ctrl: CustomControl) => {
        adItems.push(
            new AdItem(factoryService.getAdComponent(ctrl.type), ctrl.label, ctrl.controlName, ctrl.required, ctrl.placeHolder, ctrl.data)
        );
    });

    return adItems;
}