import { NativeDateAdapter } from "@angular/material";

export class AppDateAdapter extends NativeDateAdapter {

    format(date: Date, displayFormat: Object): string {
        return displayFormat === 'input' ? 
            `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` : 
            date.toDateString();
    }
}