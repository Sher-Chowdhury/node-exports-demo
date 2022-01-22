'use strict'

function loudPrint(msg){
	console.log(msg)
} 

// notice here we can use "module.exports" to export the function as 
// a different name to the one we've defined in the file. 
module.exports = {
	print: loudPrint
}