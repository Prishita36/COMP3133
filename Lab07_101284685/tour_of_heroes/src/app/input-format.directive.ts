import { UpperCasePipe } from '@angular/common';
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})


export class InputFormatDirective {

  constructor(private el: ElementRef) {}
    
    @HostListener('blur') onBlur() {
      let value: string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toUpperCase();
    }

}