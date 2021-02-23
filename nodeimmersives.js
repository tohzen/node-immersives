// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const fname = getInput(0);
const lname = getInput(1);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(" ");
console.log("A warm hello to "  + fname + " "+ lname + " in my style.");
console.log( "cool name, lets see that in all caps "+ fname.toUpperCase() + " " + lname.toUpperCase());
console.log( "Now we will give your initials " + fname[0] + "." + lname[0] + ".");
console.log( "And finally here is your new email! " + fname + "." + lname + "@codeimmersives.com" );
console.log(" ");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
