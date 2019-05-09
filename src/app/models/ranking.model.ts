import { Gebied, GebiedRankingPositie } from './gebied.model';

export class Ranking {

    constructor(
        private _id: Number,
        private _naam: string,
        private _continent: Number,
        private _gebieden: GebiedRankingPositie[]) { }

    get id() { return this._id; }
    get naam() { return this._naam; }
    get continent() { return this._continent; }
    get gebieden() { return this._gebieden.sort(m => m.positie); }

    set id(id: Number) { this._id = id; }
    set naam(naam: string) { this._naam = naam; }
    set continent(continent: Number) { this._continent = continent; }
    set gebieden(gebieden: GebiedRankingPositie[]) { this._gebieden = gebieden; }

    continentToString(): string {
        switch (this.continent) {
            case 0: {
                return "Noord-Amerika";

            }
            case 1: {
                return "Zuid-Amerika";

            }
            case 2: {
                return "Europa";
            }
            case 3: {
                return "Azië";
            }
            default:
                return "";
        }
    }
    static fromJSON(json: any): Ranking {
        const rec = new Ranking(json.id, json.naam, json.continent, json.gebieden.map(GebiedRankingPositie.fromJSON));
        console.log(rec);
        return rec;
    }
}