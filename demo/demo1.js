'use strict'

// By default, require looks inside the node_module folder for a module called "utils". 
// However here overrode this using the "../" to specify where to look. 

// also since we specified a path to a folder, it means that by default it will looks for file called "index.js"
// and then loads that if it finds it. If the file doesn't exist, then you'll get an error. 
const utils = require('../utils')

utils.print("hello world")

