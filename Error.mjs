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

    static errorMessage = "";



    static printArgumentError = () => console.log(this.errors.argumentError);



    static setRemoveError = (input, cleanList) => {

        input === undefined ? this.errorMessage = this.errors.deleteEmptyCall
            : input > cleanList.length ? this.errorMessage = this.errors.deleteOverIndex
                : input <= 0 ? this.errorMessage = this.errors.deleteUnderIndex
                    : isNaN(input) === true ? this.errorMessage = this.errors.deleteNaNIndex
                        : this.errorMessage = unidentifedError;

        console.log(this.errorMessage);
    };


    
    static setMarkDoneError = (input, cleanList) => {

        input === undefined ? this.errorMessage = this.errors.markDoneEmptyCall
            : input > cleanList.length ? this.errorMessage = this.errors.markDoneOverIndex
                : input <= 0 ? this.errorMessage = this.errors.markDoneUnderIndex
                    : isNaN(input) === true ? this.errorMessage = this.errors.markDoneNaNIndex
                        : this.errorMessage = unidentifedError;
                        
        console.log(this.errorMessage);
    }
};