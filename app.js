import fs from "fs";

const printInfo = () => {
    const userGuide = fs.readFileSync('./userGuide.txt', {encoding:'utf8'});
    // {encoding:'utf8', flag:'r'})
        console.log(userGuide);
};

printInfo();



