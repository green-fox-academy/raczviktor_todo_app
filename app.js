import fs from "fs";

const args = process.argv;

const order = args[2];

const input = args[3];

const appRoot = args[1].slice(0, -6);

const dataPath = (args[1].slice(0, -6) + 'todos.txt');

const rawList = fs.readFileSync(dataPath).toString();

const cleanList = rawList.split('\n').filter(content => content !== '');

const doneMark = '[X]';

const todoMark = '[ ]';

const errors = {
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


const printArgumentError = () => console.log(errors.argumentError);



const printUserGuide = () => {

    const userGuide = fs.readFileSync(appRoot + 'userGuide.txt')
        .toString();

    console.log(userGuide);
};



const printList = () => {

    cleanList.length === 0 ? console.log(errors.listEmptyCall)
        : markTodo();
};



const markTodo = () => {
    cleanList.forEach((element, i) => {
        element.includes(doneMark)
            ? console.log(i + 1 + ' - ' + element)
            : console.log(i + 1 + ` - ${todoMark} ` + element);
    });
};



const addTodo = () => {

    input ? fs.writeFileSync(dataPath, rawList + '\n' + input)
        : console.log(errors.addEmptyCall);
};



const removeTodo = () => {

    input < cleanList.length && input >= 0
        ? cleanList.splice((input - 1), 1)
        : setRemoveError();

    fs.writeFileSync(dataPath, cleanList.join('\n'));
};



const setRemoveError = () => {

    input === undefined ? console.log(errors.deleteEmptyCall)
        : input > cleanList.length ? console.log(errors.deleteOverIndex)
            : input <= 0 ? console.log(errors.deleteUnderIndex)
                : isNaN(input) === true ? console.log(errors.deleteNaNIndex)
                    : console.log(unidentifedError);
}



const markDone = () => {

    input === undefined ? console.log(errors.markDoneEmptyCall)
        : input > cleanList.length ? console.log(errors.markDoneOverIndex)
            : input <= 0 ? console.log(errors.markDoneUnderIndex)
                : isNaN(input) === true ? console.log(errors.markDoneNaNIndex)
                    : cleanList.splice((input - 1), 1, `${doneMark} ${cleanList[input - 1]}`);

    fs.writeFileSync(dataPath, cleanList.join('\n'));
};





switch (order) {
    case undefined: { printUserGuide(); break; }
    case '-l': { printList(); break; }
    case '-a': { addTodo(); break; }
    case '-r': { removeTodo(); break; }
    case '-c': { markDone(); break; }
    default: {
        printArgumentError();
        printUserGuide();
    }
}

