import { Gebied, GebiedRankingPositie, GebiedRankingPositieDTO } from './gebied.model';
import { ConnectionPositionPair } from '@angular/cdk/overlay';

export class Ranking {
    private _id: Number;
    constructor(
        private _naam: string,
        private _gebieden: GebiedRankingPositie[]) { }

    get id() { return this._id; }
    get naam() { return this._naam; }
    get gebieden() { return this._gebieden; }

    set id(id: Number) { this._id = id; }
    set naam(naam: string) { this._naam = naam; }
    set gebieden(gebieden: GebiedRankingPositie[]) { this._gebieden = gebieden; }

    
    static fromJSON(json: any): Ranking {
        const rec = new Ranking(json.naam,json.gebieden.map(GebiedRankingPositie.fromJSON));
        rec.id = json.id;
        rec.gebieden.sort((a,b) => a.positie.valueOf() - b.positie.valueOf());
        rec.gebieden.forEach(gebied => console.log(gebied.positie));
        return rec;
    }
}

export class RankingDTO{
    constructor(
        private _naam : string,
        private _gebieden : GebiedRankingPositieDTO[]){}

    get naam(){return this._naam;}
    //get continent(){return this._continent;}
    get gebieden(){return this._gebieden;}

    set naam(naam : string){this._naam = naam;}
    set gebieden(gebieden : GebiedRankingPositieDTO[]){this._gebieden = gebieden;}

    toJSON() : any{
        return{
            naam : this.naam,
            gebieden : this.gebieden.map(geb => geb.toJSON())
        }
    }
    
}