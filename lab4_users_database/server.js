const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/UsersRoutes");

const app = express();
app.use(express.json());

mongoose.connect(
  'mongodb+srv://Prishita:Prishita36@comp3123.bj5ug.mongodb.net/Users?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(userRouter);

app.listen(8081, () => {
  console.log("Server is running...");
});