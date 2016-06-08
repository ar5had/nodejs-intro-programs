var http = require('http');
var url = require('url');
var portNo = process.argv[2];
function getJson(urlProps, dateTime){
    if(urlProps.pathname === '/api/parsetime'){
        var hour = new Date(dateTime).getHours();
        var minute = new Date(dateTime).getMinutes();
        var second = new Date(dateTime).getSeconds();
        return { "hour": hour, "minute": minute,"second": second };
        
    }
    else if(urlProps.pathname === '/api/unixtime'){
        var milli = new Date(dateTime).getTime();
        return { "unixtime": milli };
    }
}
var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var urlProps = url.parse(req.url,true);
    var dateTime = (urlProps.query.iso).toString();
    var json = getJson(urlProps, dateTime);
    res.end(JSON.stringify(json));
});
server.listen(portNo);