var friends = require("../data/friends");
module.exports = function(app) {


app.get("/api/friends", function(req, res) {
    res.json(friends);
});

var userData = req.body;
var userScores = userData.scores;
var difference = 0
app.post("/api/friends", function(req, res) {

    for (var i = 0; i < friends.length; i++) {

        console.log(friends[i].name);
    };

    for (var j = 0; j < friends[i].scores[j]; j++) {

        console.log(difference = userScores - friends[i].scores[j])
    };

    if (difference < friends[i].scores[j]) {
        console.log(friends[i].name)
    }

});

};

friends.push(userData);
res.json();