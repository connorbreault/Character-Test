// --- Dependencies --- //
var path = require("path");

// --- Export routing functions --- //
module.exports = function (app) {

    // --- Survey route --- //
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // --- Default home route --- //
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};