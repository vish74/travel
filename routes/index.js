var request = require('request');
exports.index = function (req, res) {
 var id = req.params.id;
 //id = "6dcc4abc-00a8-4f0c-8eca-a467f29ca6c2";
 var get_url = "https://api-sandbox.traitify.com/v1/assessments/"+id+"/data=types,traits&authorization=17nvgtl8vtvja296a1ctdthqk0";
 request.get({
        headers:    {'content-type' : 'text/json'},
        url:        get_url
    }, function(error, response, body){
     console.dir(body);
    });

};
