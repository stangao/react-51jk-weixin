var webpack = require('webpack');
//var http = require('http');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
var proxy = [{
    path: '/product/*',
    target: 'http://api.weixin.51jk.com/',
    host: 'api.weixin.51jk.com'
}];

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: proxy,
    stats: {
        colors: true
    },
});



//将其他路由，全部返回index.html
//server.app.get('/MP_verify_*.txt', function (req, res) {
//
//  var result = http.get('http://service-dev.51jk.com/pay/wx/getmpveriry?site_id=100030', function (rres) {
//      rres.setEncoding('utf8');
//      let rawData = '';
//      rres.on('data', (chunk) => rawData += chunk);
//      rres.on('end', () => {
//          try {
//              var data = JSON.parse(rawData);
//              res.send(data.value);
//  } catch (e) {
//          console.log(e.message);
//      }
//          res.end();
//  });
//  });
//});

//将其他路由，全部返回index.html
server.app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

server.listen(3000);
