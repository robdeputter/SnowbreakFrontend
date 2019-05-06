export class Gebied {

    constructor(
        private _id: Number,
        private _naam: string,
        private _land: string,
        private _contintent: number,
        private _lengtegraad: string,
        private _breedtegraad: string,
        private _aantalKmPiste: Number,
        private _hoogteGebied: Number

    ) { }

    // [...] other getters
    get id() { return this._id; }
    get naam() { return this._naam; }
    get land() { return this._land; }
    get continent() { return this._contintent;}
    get lengtegraad() { return this._lengtegraad; }
    get breedtegraad() { return this._breedtegraad; }
    get aantalKmPiste() { return this._aantalKmPiste; }
    get hoogteGebied() { return this._hoogteGebied; }


    set id(id: Number) { this._id = id; }
    set naam(naam: string) { this._naam = naam; }
    set land(land: string) { this._land = land; }
    set continent(continent: number) { this._contintent = continent;}
    set lengtegraad(lengtegraad: string) { this._lengtegraad = lengtegraad; }
    set breedtegraad(breedtegraad: string) { this._breedtegraad = breedtegraad; }
    set aantalKmPiste(aantalKmPiste: Number) { this._aantalKmPiste = aantalKmPiste; }
    set hoogteGebied(hoogteGebied: Number) { this._hoogteGebied = hoogteGebied }

    continentToString() : string{
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


    static fromJSON(json: any): Gebied {
        const rec = new Gebied(json.id, json.naam, json.land, json.continent, json.lengteGraad
            , json.breedtegraad, json.aantalKmPiste, json.hoogteGebied);
        return rec;
    }

}