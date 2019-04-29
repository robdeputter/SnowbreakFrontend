import { Pipe, PipeTransform } from '@angular/core';
import { Gebied } from '../models/gebied.model';

@Pipe({
  name: 'gebiedFilter'
})
export class GebiedFilterPipe implements PipeTransform {

  transform(gebieden: Gebied[], naam: string): Gebied[] {
    if (!naam || naam.length === 0) {
      return gebieden;
    }
    return gebieden.filter(rec =>
      rec.naam.toLowerCase().startsWith(naam.toLowerCase())
    );
  }

}
