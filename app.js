import fs from "fs";

const args = process.argv;

const appRoot = args[1].slice(0, -6);

const rawList = fs.readFileSync(appRoot + 'todos.txt').toString();

const cleanList = rawList.split('\n').filter(content => content !== '');

const input = args[3];



const printUserGuide = () => {

    const userGuide = fs.readFileSync(appRoot + 'userGuide.txt')
        .toString();

    console.log(userGuide);
};



const printList = () => {

    if (cleanList.length === 0) {
        console.log('Nincs mára tennivalód! :)');
    }

    for (let i = 0; i < cleanList.length; i++) {
        console.log(`${(i + 1)} - ${cleanList[i]}`);
    }
};



const addTodo = () => {

    input ? fs.writeFileSync(appRoot + 'todos.txt', rawList + '\n' + input)
        : console.log('Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!');
};



const removeTodo = () => {
    input === undefined ? console.log('Nem lehetséges az eltávolítás: nem adott meg indexet')
        : input > cleanList.length ? console.log('Nem lehetséges az eltávolítás: túlindexelési probléma adódott!')
            : input <= 0 ? console.log('Nem lehetséges az eltávolítás: alulindexelési probléma adódott!')
                : isNaN(input) === true ? console.log('Nem lehetséges az eltávolítás: a megadott index nem szám!')
                    : cleanList.splice((input - 1), 1);
    fs.writeFileSync(appRoot + 'todos.txt', cleanList.join('\n'));
};



switch (args[2]) {
    case '-l': { printList(); break; }
    case '-a': { addTodo(); break; }
    case '-r': { removeTodo(); break; }
    default: {
        printUserGuide();
    }
}