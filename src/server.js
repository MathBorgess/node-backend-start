const express = require("express");
const app = express();
const usersRouter = require("./routes/users.js");

app.use(express.json());
app.use("/users", usersRouter);

app.listen(3000, () => console.log("listening on port 3000"));
