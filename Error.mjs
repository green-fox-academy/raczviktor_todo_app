export class Error {
    static errors = {
        argumentError: '\n    Nem támogatott argumentum!',
        listEmptyCall: 'Nincs mára tennivalód! :)',
        addEmptyCall: 'Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!',
        deleteEmptyCall: 'Nem lehetséges az eltávolítás: nem adott meg indexet',
        deleteOverIndex: 'Nem lehetséges az eltávolítás: túlindexelési probléma adódott!',
        deleteUnderIndex: 'Nem lehetséges az eltávolítás: alulindexelési probléma adódott!',
        deleteNaNIndex: 'Nem lehetséges az eltávolítás: a megadott index nem szám!',
        markDoneEmptyCall: 'Nem lehetséges a feladat végrehajtása: nem adtál meg indexet!',
        markDoneOverIndex: 'Nem lehetséges a feladat végrehajtása: túlindexelési probléma adódott!',
        markDoneUnderIndex: 'Nem lehetséges a feladat végrehajtása: alulindexelési probléma adódott!',
        markDoneNaNIndex: 'Nem lehetséges az eltávolítás: a megadott index nem szám!',
        unidentifedError: 'Ismeretlen hiba'
    };

    static printArgumentError = () => console.log(this.errors.argumentError);

    static setRemoveError = (input) => {

        input === undefined ? console.log(this.errors.deleteEmptyCall)
            : input > cleanList.length ? console.log(this.errors.deleteOverIndex)
                : input <= 0 ? console.log(this.errors.deleteUnderIndex)
                    : isNaN(input) === true ? console.log(this.errors.deleteNaNIndex)
                        : console.log(unidentifedError);
    };

    static setMarkDoneError = (input) => {

        input === undefined ? console.log(this.errors.markDoneEmptyCall)
            : input > cleanList.length ? console.log(this.errors.markDoneOverIndex)
                : input <= 0 ? console.log(this.errors.markDoneUnderIndex)
                    : isNaN(input) === true ? console.log(this.errors.markDoneNaNIndex)
                        : console.log(unidentifedError);
                        return;
    }
};