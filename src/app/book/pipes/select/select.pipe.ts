import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {
  transform(value: Object, property: string): any {
    if (value && value[property] !== undefined) return value[property];

    throw new Error(`Property ${property} not found in given object ${typeof value}`);
  }
}
