import fs from "fs";

const args = process.argv;

const appRoot = args[1].slice(0, -6);


const printUserGuide = () => {
    const userGuide = fs.readFileSync(appRoot + 'userGuide.txt').toString();

    console.log(userGuide);
};


const printList = () => {
    let todoList = [];

    const rawList = fs.readFileSync(appRoot + 'todos.txt').toString();

    todoList = rawList.split('\n');

    let filteredList = todoList.filter(content => content !== '');
        
      if (filteredList.length === 0) {
        console.log('Nincs mára tennivalód! :)');
      }
   

    for (let i = 0; i < filteredList.length; i++) {
        console.log(`${(i+1)} - ${filteredList[i]}`);
    }
};


switch (args[2]) {
    case '-l': { printList(); break; }
    default: {
        printUserGuide();
    }
}