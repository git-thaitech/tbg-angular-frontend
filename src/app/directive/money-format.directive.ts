import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMoneyFormat]'
})
export class MoneyFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const input = event.target;
    let value = input.value;

    // Loại bỏ các ký tự không phải số từ giá trị nhập vào
    value = value.replace(/[^0-9]/g, '');
    // Định dạng giá trị thành chuỗi số dạng ###,###,###
    // value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    // Gán giá trị đã định dạng vào ô input
    input.value = value;
  }

}