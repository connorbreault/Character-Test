// --- Dependencies --- //
var express = require("express");
var path = require("path");

// --- Express set up --- //
var app = express();
var PORT = process.env.PORT || 3000;
// --- Json-ification --- //
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// --- Send express to routing files --- ///
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// --- Display port in console --- //
app.listen(PORT, function () {
  console.log("App listening on port: " + PORT);
});
