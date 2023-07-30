import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  transform(value: number): string {
    const units = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    const tens = ['', 'mười', 'hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi'];
    const groups = ['', 'ngàn', 'triệu', 'tỷ'];

    if (value >= 1000000000000) {
      return "Vượt quá giới hạn cho phép!"
    }

    if (value === 0) {
      return 'không đồng.';
    }

    let result = '';

    for (let i = 0; value > 0; i++) {
      const groupValue = value % 1000;
      value = Math.floor(value / 1000);

      if (groupValue === 0) {
        continue;
      }

      let groupString = '';

      const hundreds = Math.floor(groupValue / 100);
      const tensAndUnits = groupValue % 100;

      if (hundreds > 0) {
        groupString += units[hundreds] + ' trăm ';
      } else if (value > 0) {
        groupString += 'không trăm ';
      }

      if (tensAndUnits > 0) {
        if (tensAndUnits < 10 && hundreds > 0) {
          groupString += 'lẻ ' + units[tensAndUnits];
        } else if (tensAndUnits < 10 && hundreds <= 0) {
          groupString += units[tensAndUnits];
        }
        else if (tensAndUnits < 20) {
          if (tensAndUnits === 10) {
            groupString += 'mười';
          } else {
            groupString += 'mười ' + units[tensAndUnits % 10];
          }
        } else {
          const tensDigit = Math.floor(tensAndUnits / 10);
          const unitsDigit = tensAndUnits % 10;
          if (tensDigit === 1) {
            groupString += 'mười ';
          } else {
            groupString += tens[tensDigit] + ' ';
          }
          if (unitsDigit === 1) {
            groupString += 'mốt';
          } else if (unitsDigit === 5) {
            groupString += 'lăm';
          } else {
            groupString += units[unitsDigit];
          }
        }
      }

      groupString += ' ' + groups[i];
      result = groupString + ' ' + result;
    }

    const firstChar = result.charAt(0).toUpperCase();
    result = firstChar + result.slice(1);

    return result.trim() + ' đồng.';
  }
}