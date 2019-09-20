// --- Load friends.js into this file --- //
var characterData = require("../data/friends")

module.exports = function (app) {

    // --- Get and display all characters --- //
    app.get("/api/friends", function (req, res) {
        res.json(characterData);
    });

    // --- Add new character to character list --- //
    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        characterData.push(req.body);
        res.json(true);
    });
}