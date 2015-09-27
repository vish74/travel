var request = require('request');

var Thoughtful = ["London", "Bora Bora", "Barcelona", "Paris", "Sydney", "New York City", "Maui", "Rio de Janeiro", "Zurich", "Budapest", "Las Vegas"]
var Charismatic = ["Barcelona", "Paris", "Sydney", "New York City", "Maui", "Rio de Janeiro", "Cape Town", "San Francisco"]
var Reliable = ["New York City", "Maui", "Rio de Janeiro", "Cape Town", "San Francisco", "Maldives", "Prague", "Virgin Islands", "Zurich", "Budapest", "Las Vegas"]
var Mellow = ["Paris", "Sydney", "New York City", "Maui", "Rio de Janeiro", "Cape Town", "San Francisco", "Maldives", "Prague", "Yellowstone"]
var Rational = ["New York City", "Maui", "Rio de Janeiro", "Vancouver", "Washington DC", "Virgin Islands", "Barcelona", "Paris", "Sydney"]
var Social = ["Maui", "Rio de Janeiro", "Cape Town", "San Francisco", "Virgin Islands", "Zurich", "Budapest", "Las Vegas"]
var Adventurous = ["Zurich", "Budapest", "Las Vegas", "Jerusalem", "Playa del Carmen", "Paris", "Sydney", "New York City", "Maui", "Rio de Janeiro", "Cape Town"]

exports.index = function (req, res) {
 var id = req.params.id;
 var get_url = "https://api-sandbox.traitify.com/v1/assessments/"+id+"?data=blend,types,traits&authorization=17nvgtl8vtvja296a1ctdthqk0";


    Getfrom(get_url, function(callback){
        res.status(200).send(callback);
    })

};


exports.country = function (req, res) {
    var id = req.params.id;
    var get_url = "https://api-sandbox.traitify.com/v1/assessments/"+id+"?data=blend,types,traits&authorization=17nvgtl8vtvja296a1ctdthqk0";

    Getfrom(get_url, function(callback){

        var json_fil = JSON.parse(callback);
        var name = json_fil["personality_blend"]["name"];
        console.log(JSON.stringify(name));
    })

};


function Getfrom(url, callback) {
    request.get({
        headers:    {'content-type' : 'text/json'},
        url:        url
    }, function(error, response, body){
        callback(body);
    });
}
