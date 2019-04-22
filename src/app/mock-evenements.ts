import { Evenement } from './models/evenement.model';

const JsonRecipes = [
  {
    id: 1,
    naam: "9nines AUDI",
    beschrijving: "Jaarlijks evenement voor snowboarders en skiërs",
    startDatum: new Date(2019,4,22),
    eindDatum: new Date(2019, 4, 27),
    nrOfDays: 5
  },
  {
    id: 2,
    naam: "World ski and snowboard festival 2019",
    beschrijving: "Het grootste wintersport en muziekfestival van Noord-Amerika!",
    startDatum: new Date(2019,4,10),
    eindDatum: new Date(2019,4,14),
    nrOfDays: 4
  }
];
export const EVENEMENTEN: Evenement[] = JsonRecipes.map(Evenement.fromJSON);