import fs from "fs";

const args = process.argv;

const appRoot = args[1].slice(0, -6);

const printUserGuide = () => {

    const userGuide = fs.readFileSync(appRoot + 'userGuide.txt')
        .toString();

    console.log(userGuide);
};


const printList = () => {

    let todoList = fs.readFileSync(appRoot + 'todos.txt')
        .toString()
        .split('\n')
        .filter(content => content !== '');

    if (todoList.length === 0) {
        console.log('Nincs mára tennivalód! :)');
    }

    for (let i = 0; i < todoList.length; i++) {
        console.log(`${(i + 1)} - ${todoList[i]}`);
    }
};


switch (args[2]) {
    case '-l': { printList(); break; }
    default: {
        printUserGuide();
    }
}