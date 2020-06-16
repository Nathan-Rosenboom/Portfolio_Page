const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");

const app = express();
let PORT = process.env.PORT || 8080;
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultlayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequlize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
