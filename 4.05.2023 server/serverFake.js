import http from 'http';
import url from 'url';
http.createServer((req, res) => {
    var urlobj = url.parse(req.url,true);
    console.log(">>>>>>>>>>>>", res.write(urlobj));
}).listen(5000);