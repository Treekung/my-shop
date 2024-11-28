// src/plugins/your-plugin/ui/providers.ts
import { registerFormInputComponent } from '@vendure/admin-ui/core';
import { SliderFormInputComponent } from './custom-draft';

export default [
  registerFormInputComponent('slider-form-input', SliderFormInputComponent),
];
