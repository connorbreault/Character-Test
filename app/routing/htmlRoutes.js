// --- Dependencies --- //
var path = require("path");

// --- Export routing functions --- //
module.exports = function (app) {

    // --- Default home route --- //
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};