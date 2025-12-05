import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number | string): string {
    const num = +value; // Convert to number

    if (isNaN(num)) {
      return String(value); // Return original if not a number
    }

    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return num + 'th'; // Special case for 11th, 12th, 13th
    }

    switch (lastDigit) {
      case 1: return num + 'st';
      case 2: return num + 'nd';
      case 3: return num + 'rd';
      default: return num + 'th';
    }
  }
}
