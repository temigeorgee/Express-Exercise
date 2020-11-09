const express = require("express");
const morgan = require('morgan');
main = express();
const bodyParser = require('body-parser');
const myRoutes = require('./routes');

main.use(morgan('tiny'));
main.use(bodyParser.json());
main.use(myRoutes);


main.listen(3000,()=>{
    console.log("Listening to PORT 3000")
})