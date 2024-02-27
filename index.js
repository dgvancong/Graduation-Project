const express = require("express");
const project = require("./routes/project");



const app = express();
app.use(express.json());


app.use("/project", project);


const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server is running at http://localhost:${port}`));