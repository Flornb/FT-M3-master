const process = require("process");
const commands = require("./commands/index.js");

const print = (output) => {
  process.stdout.write(output)
  process.stdout.write("\nprompt> ")
} //funcion que imprime en pantalla

const bash = () => {
  process.stdout.write ("prompt >")
  process.stdin.on("data", (data)=> {
    let args = data.toString().trim().split(" ") 
    //args guarda lo escrito en consola
    //args es un array de strings
    let cmd = args.shift()

    commands[cmd]
    ? commands[cmd](print, args) 
    : print(`command not found: ${cmd}`)
  })
}

bash();
module.exports = {
  print,
  bash,
};
