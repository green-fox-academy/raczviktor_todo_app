import fs from "fs";

const args = process.argv;

const appRoot = args[1].slice(0, -6);








const printUserGuide = () => {

    const userGuide = fs.readFileSync(appRoot + 'userGuide.txt')
        .toString();

    console.log(userGuide);
};


const printList = () => {

    let cleanList = fs.readFileSync(appRoot + 'todos.txt')
        .toString()
        .split('\n')
        .filter(content => content !== '');

    if (cleanList.length === 0) {
        console.log('Nincs mára tennivalód! :)');
    }

    for (let i = 0; i < cleanList.length; i++) {
        console.log(`${(i + 1)} - ${cleanList[i]}`);
    }
};


const addTodo = () => {

    const newTodo = args[3];

    let rawList = fs.readFileSync(appRoot + 'todos.txt').toString();

    newTodo ? fs.writeFileSync(appRoot + 'todos.txt', rawList + '\n' + newTodo )
        : console.log('Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!');
};



switch (args[2]) {
    case '-l': { printList(); break; }
    case '-a': { addTodo(); break; }
    default: {
        printUserGuide();
    }
}