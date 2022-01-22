'use strict'

// In node, a file called "index.js" has special meaning to node. It means the default place to look for something. 


function print(msg){
	console.log(msg)
} 

module.exports = {
	print: print
}