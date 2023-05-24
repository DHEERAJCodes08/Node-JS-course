//starting with the Course we will be using some Usefull Elements !

//there is no windo  ie there is no window object....
// 1> __dirname  = path to Current Directory
// 2> __filename  = file name
// 3> require = function to use Modules
// 4> module  =  infromation about current module(file)
// 5> process = information about env where the program is being executed




/* GLOBAL VARIABLE */

//Global variables in NodeJS are variables that can be declared with a value, and which can be accessed anywhere in a program.
setInterval( () =>{
   console.log("Hello Brotheer");
},1000)  // its the value in ms milliseconds where 1s = 1000ms !



/* MODULES */

//Modules are the blocks of encapsulated code that communicate with an external application on the basis of their related functionality.
//Every file in the node is an Module

/* 
const SECRET = "secret"; 
const sameer = "sameer";
const chetan = "chetan";

const sayHI = (name) => {
   console.log(`Hello Iam ${name}`);          //its an Normal program  
}

sayHI("suzan");
sayHI(sameer);
sayHI(chetan);

 */

//Now using Module by creating files  names.js and mainfun.js


//here we are accessijg the share data

const names =  require('./4-name')     // here ' ./ ' is always required to access the properties
console.log(names)

const sayHI = require('./5-mainfun')

sayHI("suzan");
sayHI(names.sameer);              //Now we will be connecting this
sayHI(names.chetan); 




//this is the shared properties from exort_Alternate-synt

const data = require('./export_Alternate-synt')
console.log(data)



