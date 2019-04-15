import { CustomForm } from "../models/custom-form";
import { CustomRow } from "../models/custom-row";
import { CustomControl } from "../models/custom-control";
import { Validators } from "@angular/forms";
import { AdRowItems } from "../models/ad-row-items";
import { AdItem } from "../models/ad-item";
import { AdFactoryService } from "../services/ad.factory.service";

export function createControlConfig(customForm: CustomForm): any {
    let config = {};

    customForm.customRows.forEach((row: CustomRow) => {
        row.customControls.forEach((ctr: CustomControl) => {
            config[ctr.controlName as any] = ['', ctr.required ? Validators.required : Validators.nullValidator]
        });
    });

    return config;
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
            new AdItem(factoryService.getAdComponent(ctrl.type), ctrl.label, ctrl.controlName, ctrl.required)
        );
    });

    return adItems;
}