import { Pipe, PipeTransform } from '@angular/core';
import { Ranking } from '../models/ranking.model';

@Pipe({
  name: 'rankingFilter'
})
export class RankingFilterPipe implements PipeTransform {

  transform(rankings: Ranking[], naam: string): Ranking[] {
    if (!naam || naam.length === 0) {
      return rankings;
    }
    return rankings.filter(rec =>
      rec.naam.toLowerCase().startsWith(naam.toLowerCase())
    );
  }
}
