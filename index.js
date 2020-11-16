require('http')
  .Server((req, res) => {
    if (req.url === '/result4/') {
      const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'x-test, Content-Type, Access-Control-Allow-Headers'
      };

      const result = {
        message: 'moskalev27',
        'x-result': req.headers['x-test']
      };
      let body = '';
      req.on('data', ch => (body += ch))
        .on('end', () => {
          result['x-body'] = body;
          res.writeHead(200, { ...CORS, 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
        });
    }
  })
  .listen(4321, () => console.log('Server start OK'));