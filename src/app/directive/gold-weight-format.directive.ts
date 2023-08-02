import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGoldWeightFormat]'
})
export class GoldWeightFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const input = event.target;
    let value = input.value;

    // Loại bỏ các ký tự không phải số từ giá trị nhập vào
    value = value.replace(/[^0-9.]/g, '');
    const pos = value.indexOf('.');
    if (pos !== -1) {
      value = value.slice(0, pos + 1) + value.slice(pos + 1).replace(/\./g, '');
      // Tách chuỗi thành phần trước và sau dấu chấm thập phân
      const integerPart = value.slice(0, pos);
      let decimalPart = value.slice(pos + 1);
      // Bỏ các kí tự từ thập phân thứ 2 trở đi trong phần sau của chuỗi
      decimalPart = decimalPart.slice(0, 1);
      // Ghép lại phần trước và sau để tạo chuỗi kết quả
      value = integerPart + '.' + decimalPart;
    }

    // Gán giá trị đã định dạng vào ô input
    input.value = value;
  }
}
