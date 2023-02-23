const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

const pwd = (print, args) => {
    print(process.cwd()) // otra forma print(__dirname)
}

const date = (print, args) => {
    print(Date())
}

const echo = (print, args) => {
    print(args.join(""))
}

const ls = (print, arg) => {
    fs.readdir(".", "utf-8", (err, files) => {
       if(err) throw Error(err)
       print(files.join("\n")) 
    })
}

const cat = (print, args) => {
    fs.readFile (args.join(""), "utf-8", (err, data) =>{
        if(err) throw Error(err)
        print(data)
    })
}

const head = (print, args) => {
    fs.readFile(args.join(""), "utf-8", (err, data) =>{
        if(err) throw Error(err)
        print (data.split("\n").splice(0, 1).join(""))
    })
}

const tail = (print, args) => {
    fs.readFile(args, "utf-8", (err, data) => {
        if(err) throw Error(err)
        print (data.split("\n").at(-1))
    })
}

const curl = (print, args) => {
    utils.request(args.join(""), "utf-8", (err, data) =>{
        if(err) throw Error(err)
        print(response.data)
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
