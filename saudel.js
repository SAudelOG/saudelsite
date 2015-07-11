(function(){
  'use strict'

  var express = require('express'),
      http = require('http'),
      app = express();

  app.set('port', process.env.PORT || 3000);

  http.createServer(app).listen(app.get('port'),function(){
    console.log('Express started in: ' + app.get('env') +
      ' mode on http://localhost: ' + app.get('port') +
      '; press Ctrl-C to terminate.');
  });
})();
