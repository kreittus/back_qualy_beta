require('dotenv').config()
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const App = express();


App.use(cors());
App.use(express.json());

App.use(routes);

const agora = new Date();
console.log(agora);
//teste git
App.listen(process.env.PORT, () => console.log("Server is running in port: "+process.env.PORT+ " ..."))
