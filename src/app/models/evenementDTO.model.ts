export class EvenementDTO {

    constructor(
        private _naam: string,
        private _beschrijving: string,
        private _startDatum: Date,
        private _eindDatum: Date,
        private _gebiedId: Number
    ) { }

    // [...] other getters
    
    get naam() { return this._naam; }
    get beschrijving() { return this._beschrijving; }
    get startdatum() { return this._startDatum; }
    get einddatum() { return this._eindDatum; }
    get gebiedId() { return this._gebiedId; }
    

    set naam(naam: string) { this._naam = naam; }
    set beschrijving(beschrijving: string) { this._beschrijving = beschrijving; }
    set startdatum(startdatum: Date) { this._startDatum = startdatum; }
    set einddatum(einddatum: Date) { this._eindDatum = einddatum; }
    set gebiedId(gebiedId: Number) { this._gebiedId = gebiedId; }

    toJSON(): any {
        return {
            naam: this.naam,
            beschrijving: this.beschrijving,
            startDatum: this.startdatum,
            eindDatum: this.einddatum,
            gebiedId: this.gebiedId
        };
    }

}