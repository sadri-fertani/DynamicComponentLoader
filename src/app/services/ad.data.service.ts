import { Injectable } from '@angular/core';

import { CustomForm } from '../models/custom-form';
import { CustomControl } from '../models/custom-control';
import { CustomRow } from '../models/custom-row';
import { CustomControlNameEnum } from '../shared/types';

@Injectable()
export class AdDataService {
    getCustomFormDescription(): CustomForm {
        return {
            legendLabel: 'Dynamic form validation',
            submitLabel: 'Save',
            customRows: [
                {
                    position: 0,
                    customControls: [
                        {
                            type: CustomControlNameEnum.Text,
                            required: true,
                            label: 'First name',
                            controlName: 'firstName',
                            placeHolder: 'Enter your first name'
                        },
                        {
                            type: CustomControlNameEnum.Text,
                            required: true,
                            label: 'Last name',
                            controlName: 'lastName',
                            placeHolder: 'Enter your last name'
                        }
                    ] as CustomControl[]
                },
                {
                    position: 1,
                    customControls: [
                        {
                            type: CustomControlNameEnum.Text,
                            required: false,
                            label: 'City',
                            controlName: 'city',
                            placeHolder: 'Enter your city'
                        },
                        {
                            type: CustomControlNameEnum.List,
                            required: true,
                            label: 'State',
                            controlName: 'state',
                            data: [
                                { name: '', label: '' },
                                { name: 'Arizona', label: 'AZ' },
                                { name: 'California', label: 'CA' },
                                { name: 'Colorado', label: 'CO' },
                                { name: 'New York', label: 'NY' },
                                { name: 'Pennsylvania', label: 'PA' },
                            ]
                        },
                        {
                            type: CustomControlNameEnum.Text,
                            required: false,
                            label: 'Zip',
                            controlName: 'zip',
                            placeHolder: 'Enter your zip code'
                        }
                    ] as CustomControl[]
                },
                {
                    position: 2,
                    customControls: [
                        {
                            type: CustomControlNameEnum.Email,
                            required: true,
                            label: 'E-mail',
                            controlName: 'email',
                            placeHolder: 'Enter your e-mail'
                        }
                    ] as CustomControl[]
                },
                {
                    position: 3,
                    customControls: [
                        {
                            type: CustomControlNameEnum.Radio,
                            required: true,
                            label: 'Gender',
                            controlName: 'gender',
                            data : [
                                {
                                    label : 'Male',
                                    value : 'Male'
                                },
                                {
                                    label : 'Female',
                                    value : 'Female'
                                }
                            ]
                        },
                        {
                            type: CustomControlNameEnum.MultiLignes,
                            required: true,
                            label: 'Comment',
                            controlName: 'comment',
                            placeHolder: 'Enter your comment'
                        }
                    ] as CustomControl[]
                }
            ] as CustomRow[]
        } as CustomForm;
    }
}
