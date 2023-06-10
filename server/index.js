const express = require('express');
const cors = require("cors");
//controllers
const register = require("./controllers/register-controller");
const login = require("./controllers/login-controller");

//db connection to mongo atlas
const connectToDatabase = require("./connectionDB/connection.db");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectToDatabase();

//controllers auth
app.use("/auth", register);
app.use("/auth", login);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
