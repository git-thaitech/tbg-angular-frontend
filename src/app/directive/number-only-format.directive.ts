import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnlyFormat]'
})
export class NumberOnlyFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const input = event.target;
    let value = input.value;

    // Loại bỏ các ký tự không phải số từ giá trị nhập vào
    value = value.replace(/[^0-9]/g, '');

    // Gán giá trị đã định dạng vào ô input
    input.value = value;
  }
}