// --- Load friends.js into this file --- //
var characterData = require("../data/friends")

module.exports = function (app) {

    // --- Get and display all characters --- //
    app.get("/api/friends", function (req, res) {
        res.json(characterData);
    });

    // --- Add new character to character list --- //
    app.post("/api/friends", function (req, res) {

        // --- Push user into charcaterList --- //
        tempArr = []
        req.body.scores.map((score) => {
            tempArr.push(parseInt(score))
        })
        req.body.scores = tempArr
        characterData.push(req.body);
        res.json(true);

        // --- Compare scores --- //

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        }
        var userScores = req.body.scores;
        var totalDifference = 0;

        for (var i = 0; i < characterData.length; i++) {
            if (req.body.name === characterData[i].name) {
                i++
            } else {
                var currentCompare = characterData[i]
                var currentCompareScores = characterData[i].scores
                totalDifference = 0

                for (var j = 0; j < currentCompareScores.length; j++) {
                    var currentFriendScore = currentCompareScores[j]
                    var currentUserScore = userScores[j]
                    let currentTotal = totalDifference
                    totalDifference = currentTotal + Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScore))
                    console.log(currentCompare.name + " current: " + totalDifference + " = " + currentFriendScore + " - " + currentUserScore)

                } if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = currentCompare.name;
                    bestMatch.photo = currentCompare.photo;
                    bestMatch.friendDifference = totalDifference
                    var newCharacter = {
                        name: bestMatch.name,
                        photo: bestMatch.photo,
                        scores: "match"
                    }
                }
            }
        }
        characterData.push(newCharacter)
        console.log("=====>>>>" + newCharacter.name)
        console.log(bestMatch)
    });
}