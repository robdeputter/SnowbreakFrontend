export class Evenement {
  
    constructor(
        private _id: Number,
        private _naam: string,
        private _beschrijving: string,
        private _startDatum: Date,
        private _eindDatum: Date,
        private _nrOfDays: Number
        //private _gebied: Gebied
    ) { }

    // [...] other getters
        get id(){return this._id;}
        get naam(){return this._naam;}
        get beschrijving(){return this._beschrijving;}
        get startdatum(){return this._startDatum;}
        get einddatum(){return this._eindDatum;}
        get nrOfDays(){return this._nrOfDays;}
        //get gebied(){return this._gebied;}

        set id(id: Number){this._id = id;}
        set naam(naam: string){this._naam = naam;}
        set beschrijving(beschrijving: string){this._beschrijving = beschrijving;}
        set startdatum(startdatum: Date){this._startDatum = startdatum;}
        set einddatum(einddatum: Date){this._eindDatum = einddatum;}
        set nrOfDays(nrOfDays: Number){this._nrOfDays = nrOfDays;}
        //set gebied(gebied: Gebied){this._gebied = gebied;}

        static fromJSON(json: any): Evenement {
            const rec = new Evenement(json.id, json.naam, json.beschrijving,json.startDatum,json.eindDatum,
                json.nrOfDays/*json.gebied*/);
            return rec;
          }

          toJSON(): any {
            throw new Error("Method not implemented.");
          }
    
}