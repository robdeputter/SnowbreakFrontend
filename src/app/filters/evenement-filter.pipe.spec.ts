import { EvenementFilterPipe } from '../filters/evenement-filter.pipe';

describe('EvenementFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new EvenementFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
