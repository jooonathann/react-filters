const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(route);
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`server on port 3010`);
});
