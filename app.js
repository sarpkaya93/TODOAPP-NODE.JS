const _ = require("lodash");
const yargs = require("yargs");
const modul = require("./modul");

const arguments = yargs.argv;
var execute = arguments._[0];

switch (execute) {
  case "add":
    modul.add(arguments.header, arguments.description, arguments.date);
    break;
  case "list":
    modul.list();
    break;
  case "read":
    modul.read();
    break;
  case "erase":
    modul.erase();
    break;
  default:
    console.log("__DEFAULT__");
    break;
}
