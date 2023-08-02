import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToGoldWeightUnit'
})
export class NumberToGoldWeightUnitPipe implements PipeTransform {

  transform(value: any): string {
    let result = value;

    // Chuyển chuỗi thành số
    const numberValue = parseFloat(value.replace(/,/g, ''));
    if (!result.includes(".")) {
      if (numberValue >= 1000) {
        // Thêm chữ "Lượng" vào trước số hàng trăm
        const index = result.length - 3;
        result = result.substring(0, index) + 'L' + result.substring(index);
      } else if (numberValue >= 100 && numberValue < 1000) {
        // Thêm chữ "Chỉ" vào trước số hàng chục
        const index = result.length - 2;
        result = result.substring(0, index) + 'c' + result.substring(index);
      } else if (numberValue >= 10 && numberValue < 100) {
        // Thêm chữ "Phân" vào trước số hàng đơn vị
        const index = result.length - 1;
        result = result.substring(0, index) + 'p' + result.substring(index);
      } else if (numberValue >= 1 && numberValue < 10) {
        // Thêm chữ "Ly" vào trước chữ số thập phân đầu tiên và bỏ đi dấu "."
        const index = result.length;
        result = result.substring(0, index) + 'ly' + result.substring(index + 1);
      }
    } else {
      let indexOfDot = result.indexOf('.');
      if (numberValue >= 1000) {
        // Thêm chữ "Lượng" vào trước số hàng trăm
        const index = indexOfDot - 3;
        result = result.substring(0, index) + 'L' + result.substring(index);
      } else if (numberValue >= 100 && numberValue < 1000) {
        // Thêm chữ "Chỉ" vào trước số hàng chục
        const index = indexOfDot - 2;
        result = result.substring(0, index) + 'c' + result.substring(index);
      } else if (numberValue >= 10 && numberValue < 100) {
        // Thêm chữ "Phân" vào trước số hàng đơn vị
        const index = indexOfDot - 1;
        result = result.substring(0, index) + 'p' + result.substring(index);
      } else if (numberValue >= 0 && numberValue < 10) {
        // Thêm chữ "Ly" vào trước chữ số thập phân đầu tiên và bỏ đi dấu "."
        const index = indexOfDot;
        result = result.substring(0, index) + 'ly' + result.substring(index + 1);
      }
    }

    // result += ' (' + (numberValue / 100).toFixed(3) + ' chỉ)';

    return result.trim();
  }

}
