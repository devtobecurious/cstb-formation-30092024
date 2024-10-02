import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testOne',
  standalone: true,
  pure: true // mettre en cache le résultat de calcul ! => memoization
})
export class TestOnePipe implements PipeTransform {

  transform(value: {title: string}, ...args: unknown[]): string {
    return value.title.toUpperCase();
  }

}
