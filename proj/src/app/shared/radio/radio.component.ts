import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {RadioOption} from './radio-option.model'
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
  }]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

    @Input() options: RadioOption[]

    value: any
    onChange: any

    setValue(option: RadioOption) {
        this.value = option.value
        this.onChange(this.value)
    }

    writeValue(obj: any): void {
        obj = this.value
    }

    registerOnChange(fn: any): void {
        this.onChange = fn
    }
    registerOnTouched(fn: any): void {
        //throw new Error('Method not implemented.');
    }
    setDisabledState(isDisabled: boolean): void {
        //throw new Error('Method not implemented.');
    }



  constructor() { }

  ngOnInit() {
  }

}
