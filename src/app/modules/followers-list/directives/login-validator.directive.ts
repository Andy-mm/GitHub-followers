import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

/** Директива-валидатор для проверки логина */
@Directive({
  selector: '[loginValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: LoginValidatorDirective, multi: true },
  ]
})
export class LoginValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value?.length) return null;

    return new RegExp('^[0-9a-zA-Z]+$').test(control.value)
      ? null
      : { invalidLogin: true }
  }

}
