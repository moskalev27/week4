const CORS = {
  'Access-Control-Allow-Origin': 'https://kodaktor.ru',
  'Access-Control-Allow-Methods': 'GET,PUT,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
const s = require('http').Server((req, res) => {
    if (req.url === '/ru') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', ...CORS });
        res.write('<h1><i>Да</i></h1>\n'); 
    } else if (req.url === '/doc/new/vasya-new.htm') {
        res.write('<h1><i>Vasya Web Page</i></h1>\n');
    } else if (req.url === '/download') {
        res.writeHead(200, { 
         'Content-Disposition': 'attachment; filename="file.txt"'
        });
        res.write('Файл\n');        
    } else {
        res.write('OK\n');
    }
    res.end();
});
s.listen(4321); 