// src/plugins/your-plugin/ui/components/slider-form-input/slider-form-input.component.ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormInputComponent } from '@vendure/admin-ui/core';

@Component({
  selector: 'slider-form-input',
  template: `
    <input type="range" [formControl]="formControl" [min]="config.min" [max]="config.max" />
  `,
})
export class SliderFormInputComponent implements FormInputComponent {
  formControl: FormControl;
  config: any;
  readonly = false;
}
