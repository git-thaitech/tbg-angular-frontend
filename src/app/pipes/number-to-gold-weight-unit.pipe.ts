import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToGoldWeightUnit'
})
export class NumberToGoldWeightUnitPipe implements PipeTransform {

  transform(value: any): string {
    if (value > 1000000)
      return "Vượt quá giới hạn xử lý!";

    if (value >= 1000) {
      // 9L999.9

    } else if (value >= 100 && value < 1000) {
      // 9c99.9

    } else if (value >= 10 && value < 100) {
      // 9p9.9
    } else if (value < 10) {
      // 9ly9
    }

    return "chua biet ba oi";
  }

}
