import chalk from 'chalk';
import greet from './greet.js'
import figlet from 'figlet'


figlet.text(
    "Yamisa",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
const styledMessage = chalk.bgYellowBright.white(greet('Yamisa'));
console.log(styledMessage)
