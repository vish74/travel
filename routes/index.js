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

        //var dd = JSON.stringify(name);
        //var newstr = dd.replace(/"/g, "");
        var ress = name.split("/");
        var arr1 = eval(ress[0]);
        var arr2 = eval(ress[1]);

        var resultss = [];
        for (var i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) !== -1) {
                resultss.push(arr1[i]);
            }
        }
        res.status(200).send(resultss);

        //console.log(JSON.stringify(name));
    });

};

exports.listuser = function (req, res) {
    var id = req.params.id;
    var abcd =[{"picture":"https://randomuser.me/api/portraits/med/men/18.jpg","name":"tim richard","city":"nancy","nationality":"France","email":"tim.richard@example.com","personality":"Thoughtful_Rational"},{"picture":"https://randomuser.me/api/portraits/med/women/34.jpg","name":"alejandra hidalgo","city":"ferrol","nationality":"Spain","email":"alejandra.hidalgo@example.com","personality":"Rational_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/men/55.jpg","name":"clifford watkins","city":"sunshine coast","nationality":"Australia","email":"clifford.watkins@example.com","personality":"Reliable_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/men/77.jpg","name":"leon mitchelle","city":"antioch","nationality":"United States","email":"leon.mitchelle@example.com","personality":"Mellow_Social"},{"picture":"https://randomuser.me/api/portraits/med/men/77.jpg","name":"viljami kinnunen","city":"\\u00e4ht\\u00e4ri","nationality":"Finland","email":"viljami.kinnunen@example.com","personality":"Adventurous_Rational"},{"picture":"https://randomuser.me/api/portraits/med/women/1.jpg","name":"vicki edwards","city":"armagh","nationality":"United Kingdom","email":"vicki.edwards@example.com","personality":"Thoughtful_Social"},{"picture":"https://randomuser.me/api/portraits/med/men/54.jpg","name":"charles vidal","city":"vitry-sur-seine","nationality":"France","email":"charles.vidal@example.com","personality":"Charismatic_Adventurous"},{"picture":"https://randomuser.me/api/portraits/med/men/23.jpg","name":"lewis wade","city":"Shannon","nationality":"Ireland","email":"lewis.wade@example.com","personality":"Social_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/men/29.jpg","name":"liam da silva","city":"reims","nationality":"France","email":"liam.da silva@example.com","personality":"Reliable_Adventurous"},{"picture":"https://randomuser.me/api/portraits/med/men/50.jpg","name":"viljami latvala","city":"miehikk\\u00e4l\\u00e4","nationality":"Finland","email":"viljami.latvala@example.com","personality":"Mellow_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/men/25.jpg","name":"victor fabre","city":"poitiers","nationality":"France","email":"victor.fabre@example.com","personality":"Charismatic_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/74.jpg","name":"emma michel","city":"vitry-sur-seine","nationality":"France","email":"emma.michel@example.com","personality":"Thoughtful_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/women/92.jpg","name":"chloe gardner","city":"hobart","nationality":"Australia","email":"chloe.gardner@example.com","personality":"Social_Adventurous"},{"picture":"https://randomuser.me/api/portraits/med/men/82.jpg","name":"herman nguyen","city":"Ennis","nationality":"Ireland","email":"herman.nguyen@example.com","personality":"Thoughtful_Rational"},{"picture":"https://randomuser.me/api/portraits/med/women/58.jpg","name":"clara morgan","city":"little rock","nationality":"United States","email":"clara.morgan@example.com","personality":"Thoughtful_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/women/30.jpg","name":"kelly harrison","city":"Athenry","nationality":"Ireland","email":"kelly.harrison@example.com","personality":"Mellow_Rational"},{"picture":"https://randomuser.me/api/portraits/med/men/94.jpg","name":"brayden pearson","city":"santa clarita","nationality":"United States","email":"brayden.pearson@example.com","personality":"Charismatic_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/men/17.jpg","name":"jesus ross","city":"newcastle upon tyne","nationality":"United Kingdom","email":"jesus.ross@example.com","personality":"Reliable_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/men/96.jpg","name":"emil tanner","city":"konnevesi","nationality":"Finland","email":"emil.tanner@example.com","personality":"Adventurous_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/women/41.jpg","name":"tammy lankhorst","city":"beemster","nationality":"Netherlands","email":"tammy.lankhorst@example.com","personality":"Mellow_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/men/87.jpg","name":"tony ray","city":"Clane","nationality":"Ireland","email":"tony.ray@example.com","personality":"Charismatic_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/14.jpg","name":"lucy brunet","city":"toulon","nationality":"France","email":"lucy.brunet@example.com","personality":"Mellow_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/women/17.jpg","name":"eloane colin","city":"strasbourg","nationality":"France","email":"eloane.colin@example.com","personality":"Social_Adventurous"},{"picture":"https://randomuser.me/api/portraits/med/women/39.jpg","name":"carmen sanchez","city":"las palmas de gran canaria","nationality":"Spain","email":"carmen.sanchez@example.com","personality":"Adventurous_Social"},{"picture":"https://randomuser.me/api/portraits/med/women/8.jpg","name":"francisca calvo","city":"lugo","nationality":"Spain","email":"francisca.calvo@example.com","personality":"Thoughtful_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/10.jpg","name":"sophia fowler","city":"ballarat","nationality":"Australia","email":"sophia.fowler@example.com","personality":"Social_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/women/69.jpg","name":"nella kurtti","city":"konnevesi","nationality":"Finland","email":"nella.kurtti@example.com","personality":"Charismatic_Rational"},{"picture":"https://randomuser.me/api/portraits/med/women/86.jpg","name":"tracy hughes","city":"lisburn","nationality":"United Kingdom","email":"tracy.hughes@example.com","personality":"Mellow_Social"},{"picture":"https://randomuser.me/api/portraits/med/men/99.jpg","name":"eeli tanner","city":"hyrynsalmi","nationality":"Finland","email":"eeli.tanner@example.com","personality":"Rational_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/men/30.jpg","name":"randy vasquez","city":"wagga wagga","nationality":"Australia","email":"randy.vasquez@example.com","personality":"Charismatic_Rational"},{"picture":"https://randomuser.me/api/portraits/med/men/55.jpg","name":"sammy watkins","city":"Nenagh","nationality":"Ireland","email":"sammy.watkins@example.com","personality":"Thoughtful_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/men/12.jpg","name":"joona haataja","city":"espoo","nationality":"Finland","email":"joona.haataja@example.com","personality":"Charismatic_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/women/17.jpg","name":"elaine holmes","city":"gladstone","nationality":"Australia","email":"elaine.holmes@example.com","personality":"Thoughtful_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/women/71.jpg","name":"victoria marquez","city":"m\\u00e9rida","nationality":"Spain","email":"victoria.marquez@example.com","personality":"Mellow_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/men/14.jpg","name":"eric stevens","city":"dubbo","nationality":"Australia","email":"eric.stevens@example.com","personality":"Rational_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/women/48.jpg","name":"sarah matthews","city":"kingston upon hull","nationality":"United Kingdom","email":"sarah.matthews@example.com","personality":"Rational_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/men/72.jpg","name":"emil jutila","city":"lemland","nationality":"Finland","email":"emil.jutila@example.com","personality":"Rational_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/men/64.jpg","name":"richard arnold","city":"jackson","nationality":"United States","email":"richard.arnold@example.com","personality":"Mellow_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/women/44.jpg","name":"m\\u00e9lina bernard","city":"brest","nationality":"France","email":"m\\u00e9lina.bernard@example.com","personality":"Charismatic_Social"},{"picture":"https://randomuser.me/api/portraits/med/men/86.jpg","name":"kurt evans","city":"busselton","nationality":"Australia","email":"kurt.evans@example.com","personality":"Charismatic_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/women/19.jpg","name":"mimi broerse","city":"maastricht","nationality":"Netherlands","email":"mimi.broerse@example.com","personality":"Rational_Social"},{"picture":"https://randomuser.me/api/portraits/med/women/72.jpg","name":"marie morales","city":"wagga wagga","nationality":"Australia","email":"marie.morales@example.com","personality":"Social_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/women/19.jpg","name":"maria sanz","city":"ciudad real","nationality":"Spain","email":"maria.sanz@example.com","personality":"Social_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/men/36.jpg","name":"johannes van der nol","city":"zwijndrecht","nationality":"Netherlands","email":"johannes.van der nol@example.com","personality":"Mellow_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/men/74.jpg","name":"leo peters","city":"melbourne","nationality":"Australia","email":"leo.peters@example.com","personality":"Thoughtful_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/men/59.jpg","name":"william lambert","city":"limoges","nationality":"France","email":"william.lambert@example.com","personality":"Social_Rational"},{"picture":"https://randomuser.me/api/portraits/med/women/54.jpg","name":"alexis fleming","city":"scurry","nationality":"United States","email":"alexis.fleming@example.com","personality":"Rational_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/1.jpg","name":"debbie fleming","city":"aberdeen","nationality":"United Kingdom","email":"debbie.fleming@example.com","personality":"Charismatic_Rational"},{"picture":"https://randomuser.me/api/portraits/med/women/62.jpg","name":"mia perry","city":"melbourne","nationality":"Australia","email":"mia.perry@example.com","personality":"Mellow_Social"},{"picture":"https://randomuser.me/api/portraits/med/women/14.jpg","name":"milagros soler","city":"santa cruz de tenerife","nationality":"Spain","email":"milagros.soler@example.com","personality":"Thoughtful_Adventurous"},{"picture":"https://randomuser.me/api/portraits/med/men/17.jpg","name":"antonio vicente","city":"burgos","nationality":"Spain","email":"antonio.vicente@example.com","personality":"Reliable_Adventurous"},{"picture":"https://randomuser.me/api/portraits/med/women/13.jpg","name":"louella williams","city":"sunshine coast","nationality":"Australia","email":"louella.williams@example.com","personality":"Reliable_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/men/45.jpg","name":"duane morrison","city":"Thurles","nationality":"Ireland","email":"duane.morrison@example.com","personality":"Rational_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/men/91.jpg","name":"marcus jacobs","city":"belfast","nationality":"United Kingdom","email":"marcus.jacobs@example.com","personality":"Charismatic_Rational"},{"picture":"https://randomuser.me/api/portraits/med/women/94.jpg","name":"leah flores","city":"edgewood","nationality":"United States","email":"leah.flores@example.com","personality":"Charismatic_Rational"},{"picture":"https://randomuser.me/api/portraits/med/women/19.jpg","name":"iida nikula","city":"vehmaa","nationality":"Finland","email":"iida.nikula@example.com","personality":"Mellow_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/women/42.jpg","name":"lily hamilton","city":"Kilkenny","nationality":"Ireland","email":"lily.hamilton@example.com","personality":"Rational_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/men/12.jpg","name":"vilho niemela","city":"sonkaj\\u00e4rvi","nationality":"Finland","email":"vilho.niemela@example.com","personality":"Adventurous_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/men/81.jpg","name":"julian ortiz","city":"talavera de la reina","nationality":"Spain","email":"julian.ortiz@example.com","personality":"Charismatic_Social"},{"picture":"https://randomuser.me/api/portraits/med/men/33.jpg","name":"jeremiah scott","city":"Carrick-on-Shannon","nationality":"Ireland","email":"jeremiah.scott@example.com","personality":"Social_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/men/17.jpg","name":"raymond carter","city":"sunderland","nationality":"United Kingdom","email":"raymond.carter@example.com","personality":"Charismatic_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/men/65.jpg","name":"alex berger","city":"nantes","nationality":"France","email":"alex.berger@example.com","personality":"Mellow_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/women/95.jpg","name":"est\\u00e9e van kruistum","city":"stein","nationality":"Netherlands","email":"est\\u00e9e.van kruistum@example.com","personality":"Mellow_Social"},{"picture":"https://randomuser.me/api/portraits/med/women/16.jpg","name":"vilma kinnunen","city":"posio","nationality":"Finland","email":"vilma.kinnunen@example.com","personality":"Rational_Social"},{"picture":"https://randomuser.me/api/portraits/med/women/18.jpg","name":"linnea kuusisto","city":"kaavi","nationality":"Finland","email":"linnea.kuusisto@example.com","personality":"Adventurous_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/21.jpg","name":"tonya sanchez","city":"hobart","nationality":"Australia","email":"tonya.sanchez@example.com","personality":"Adventurous_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/men/91.jpg","name":"juho hanninen","city":"kolari","nationality":"Finland","email":"juho.hanninen@example.com","personality":"Charismatic_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/women/76.jpg","name":"emilie rousseau","city":"mulhouse","nationality":"France","email":"emilie.rousseau@example.com","personality":"Charismatic_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/72.jpg","name":"lisa chapman","city":"southampton","nationality":"United Kingdom","email":"lisa.chapman@example.com","personality":"Adventurous_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/women/92.jpg","name":"yolanda ray","city":"greeley","nationality":"United States","email":"yolanda.ray@example.com","personality":"Charismatic_Rational"},{"picture":"https://randomuser.me/api/portraits/med/men/27.jpg","name":"danny hokke","city":"bladel","nationality":"Netherlands","email":"danny.hokke@example.com","personality":"Adventurous_Social"},{"picture":"https://randomuser.me/api/portraits/med/men/87.jpg","name":"noham dumas","city":"cr\\u00e9teil","nationality":"France","email":"noham.dumas@example.com","personality":"Rational_Charismatic"},{"picture":"https://randomuser.me/api/portraits/med/men/99.jpg","name":"miguel jennings","city":"salford","nationality":"United Kingdom","email":"miguel.jennings@example.com","personality":"Rational_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/35.jpg","name":"becky gilbert","city":"st. petersburg","nationality":"United States","email":"becky.gilbert@example.com","personality":"Thoughtful_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/men/95.jpg","name":"michael ward","city":"Dungarvan","nationality":"Ireland","email":"michael.ward@example.com","personality":"Adventurous_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/women/9.jpg","name":"eileen peters","city":"belen","nationality":"United States","email":"eileen.peters@example.com","personality":"Social_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/men/47.jpg","name":"hector martinez","city":"san sebasti\\u00e1n de los reyes","nationality":"Spain","email":"hector.martinez@example.com","personality":"Social_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/men/11.jpg","name":"alex ellis","city":"bangor","nationality":"United Kingdom","email":"alex.ellis@example.com","personality":"Charismatic_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/8.jpg","name":"marlene brewer","city":"darwin","nationality":"Australia","email":"marlene.brewer@example.com","personality":"Social_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/51.jpg","name":"sharlene jackson","city":"sydney","nationality":"Australia","email":"sharlene.jackson@example.com","personality":"Thoughtful_Social"},{"picture":"https://randomuser.me/api/portraits/med/women/37.jpg","name":"kristin ferguson","city":"Celbridge","nationality":"Ireland","email":"kristin.ferguson@example.com","personality":"Adventurous_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/women/43.jpg","name":"fatima cortes","city":"lorca","nationality":"Spain","email":"fatima.cortes@example.com","personality":"Mellow_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/women/43.jpg","name":"angela osullivan","city":"Roscrea","nationality":"Ireland","email":"angela.osullivan@example.com","personality":"Thoughtful_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/men/62.jpg","name":"daniel vazquez","city":"cuenca","nationality":"Spain","email":"daniel.vazquez@example.com","personality":"Adventurous_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/95.jpg","name":"terri lowe","city":"warrnambool","nationality":"Australia","email":"terri.lowe@example.com","personality":"Reliable_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/23.jpg","name":"marina alonso","city":"cuenca","nationality":"Spain","email":"marina.alonso@example.com","personality":"Adventurous_Social"},{"picture":"https://randomuser.me/api/portraits/med/men/5.jpg","name":"tom howell","city":"westminster","nationality":"United Kingdom","email":"tom.howell@example.com","personality":"Reliable_Adventurous"},{"picture":"https://randomuser.me/api/portraits/med/men/42.jpg","name":"beau zegveld","city":"horst aan de maas","nationality":"Netherlands","email":"beau.zegveld@example.com","personality":"Reliable_Thoughtful"},{"picture":"https://randomuser.me/api/portraits/med/men/9.jpg","name":"henry henry","city":"topeka","nationality":"United States","email":"henry.henry@example.com","personality":"Mellow_Social"},{"picture":"https://randomuser.me/api/portraits/med/women/59.jpg","name":"carmen soto","city":"vigo","nationality":"Spain","email":"carmen.soto@example.com","personality":"Social_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/men/96.jpg","name":"victor crespo","city":"talavera de la reina","nationality":"Spain","email":"victor.crespo@example.com","personality":"Adventurous_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/women/59.jpg","name":"wieneke hoogers","city":"tholen","nationality":"Netherlands","email":"wieneke.hoogers@example.com","personality":"Adventurous_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/men/57.jpg","name":"samu wirtanen","city":"lappaj\\u00e4rvi","nationality":"Finland","email":"samu.wirtanen@example.com","personality":"Social_Rational"},{"picture":"https://randomuser.me/api/portraits/med/men/10.jpg","name":"harold richardson","city":"elizabeth","nationality":"United States","email":"harold.richardson@example.com","personality":"Thoughtful_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/women/84.jpg","name":"lumi hannula","city":"taivassalo","nationality":"Finland","email":"lumi.hannula@example.com","personality":"Rational_Social"},{"picture":"https://randomuser.me/api/portraits/med/men/2.jpg","name":"senne zwaagstra","city":"lelystad","nationality":"Netherlands","email":"senne.zwaagstra@example.com","personality":"Thoughtful_Reliable"},{"picture":"https://randomuser.me/api/portraits/med/women/48.jpg","name":"cathleen van halteren","city":"teylingen","nationality":"Netherlands","email":"cathleen.van halteren@example.com","personality":"Thoughtful_Rational"},{"picture":"https://randomuser.me/api/portraits/med/women/10.jpg","name":"enola girard","city":"paris","nationality":"France","email":"enola.girard@example.com","personality":"Rational_Social"},{"picture":"https://randomuser.me/api/portraits/med/women/60.jpg","name":"gwendolyn fox","city":"portland","nationality":"United States","email":"gwendolyn.fox@example.com","personality":"Adventurous_Mellow"},{"picture":"https://randomuser.me/api/portraits/med/men/55.jpg","name":"eemeli kallio","city":"lemland","nationality":"Finland","email":"eemeli.kallio@example.com","personality":"Charismatic_Adventurous"}];
    var dsd = []
    for(var i=0;i<100;i++)
    {
        var names = abcd[i]["name"];

        dsd.push(names);
    }

    var ds = [];
    for(var i=0;i<6;i++)
    {
        var item = dsd[Math.floor(Math.random()*dsd.length)];
        ds.push(item);
    }
        res.status(200).send(ds);

        //console.log(JSON.stringify(name));

};

exports.help = function (req, res) {
    var name = req.params.name;
    var type = req.params.type;
    
    var post_url = "https://prod-mmx-001.magnet.com:5221/mmxmgmt/api/v1/send_message";
    var sds = '{"recipientUsernames": ["quickstartuser1", "user2"], "content": {"textContent":"'+name+' needs help with '+type+'", "date":"09192019"},"receipt": false}';

    postTo(post_url,sds,function(callback){
        res.status(200).send(callback);
    });





}
exports.call = function (req, res) {

    var post_url = "https://platform.devtest.ringcentral.com/restapi/v1.0/account/~/extension/~/ringout";
    var sds = '{"to":{"phoneNumber":"17075088247"},"from":{"phoneNumber":"15107368436"}}';

    postTos(post_url,sds,function(callback){
        res.status(200).send(callback);
    });





}


function Getfrom(url, callback) {
    request.get({
        headers:    {'content-type' : 'text/json'},
        url:        url
    }, function(error, response, body){
        callback(body);
    });
}

function postTo(url,post_content, callback) {
    request.post({
        headers: 
            {
                'X-mmx-api-key': '1c6c5b81-2aad-442b-a8b2-de2568d6d5b7',
                'X-mmx-app-id': '45rif2389h3',
                'Content-Type': 'application/json'
            }
       ,
        url:        url,
        body:       post_content
    }, function(error, response, body){
        callback(body);
    });
}
function postTos(url,post_content, callback) {
    request.post({
        headers:
        {
            'Authorization': 'bearer U0pDMTFQMDFQQVMwMnxBQUF0ME9wWFlWNHdCZlEwOWZvaFA3SzRULUlrUTZUQ1JhYlRoMlgwekMxQnB2cWVfMjJzTjNNVmJpVFVwV3l2MWlZOEVhRHNxRWdJVUhPV3FzbEwwTUtuSFRHbE85SnFrUHB2cjZSYUdsbW93c1hoZ0F0THRKT258kdcWhOYZ9wyUdkISY3GnFgpI0Io',
            'Content-Type': 'application/json'
        }
        ,
        url:        url,
        body:       post_content
    }, function(error, response, body){
        callback(body);
    });
}