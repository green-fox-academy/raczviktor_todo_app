import fs from "fs";
import { Error } from "./Error.mjs";

const args = process.argv;

const dataPath = args[1].slice(0, -7) + 'todos.txt';

const order = args[2];

const input = args[3];

const rawList = fs.readFileSync(dataPath).toString();

const cleanList = rawList.split('\n').filter(content => content !== '');

const doneMark = '[X]';

const todoMark = '[ ]';



const printUserGuide = () => {

    const readMePath = args[1].slice(0, -7) + 'README.md';
    const userGuide = fs.readFileSync(readMePath)
        .toString();

    console.log(userGuide);
};



const printList = () => {

    cleanList.length === 0 ? console.log(Error.errors.listEmptyCall)
        : markTodo()
};



const addTodo = () => {

    input ? fs.writeFileSync(dataPath, rawList + '\n' + input)
        : console.log(Error.errors.addEmptyCall);
};



const removeTodo = () => {

    input < cleanList.length && input >= 0
        ? cleanList.splice((input - 1), 1)
        : Error.setRemoveError(input, cleanList);

    fs.writeFileSync(dataPath, cleanList.join('\n'));
};



const markTodo = () => {


    cleanList.forEach((element, i) => {
        element.includes(doneMark)
            ? console.log(i + 1 + ' - ' + element)
            : console.log(i + 1 + ` - ${todoMark} ` + element);
    })
};

const markDone = () => {

    input < cleanList.length && input >= 0
        ? cleanList.splice((input - 1), 1, `${doneMark} ${cleanList[input - 1]}`)
        : Error.setMarkDoneError(input, cleanList);

    fs.writeFileSync(dataPath, cleanList.join('\n'));
};


switch (order) {

    case undefined: { printUserGuide(); break; }
    case '-l': { printList(); break; }
    case '-a': { addTodo(); break; }
    case '-r': { removeTodo(); break; }
    case '-c': { markDone(); break; }
    default: {
        Error.printArgumentError();
        printUserGuide();
    }
}

