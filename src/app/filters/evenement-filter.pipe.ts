import { Pipe, PipeTransform } from '@angular/core';
import { Evenement } from '../modules/evenement.module';

@Pipe({
  name: 'evenementFilter'
})
export class EvenementFilterPipe implements PipeTransform {

  transform(evenementen: Evenement[], naam: string): Evenement[] {
    if (!naam || naam.length === 0) {
      return evenementen;
    }
    return evenementen.filter(rec =>
      rec.naam.toLowerCase().startsWith(naam.toLowerCase())
    );
  }

}
