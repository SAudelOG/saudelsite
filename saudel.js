(function(){
  'use strict';

  var express = require('express'),
      http = require('http'),
      app = express();
  //get enviroment port or set default 3000
  app.set('port', process.env.PORT || 3000);

  //public resourcer
  app.use(express.static(__dirname + '/public'));

  //set up handlebars view engine
  var handlebars = require('express3-handlebars').create({
    defaultLayout: 'main',
    hepers: {
      section: function(name, options){
          if(!this._sections) this._sections = {};
          this._sections[name] = options.fn(this);
          return null;
      }
    }
  });
  app.engine('handlebars', handlebars.engine);
  app.set('view engine', 'handlebars');

  app.get('/', function(req, res){
    res.render('home');
  });

  http.createServer(app).listen(app.get('port'),function(){
    console.log('Express started in: ' + app.get('env') +
      ' mode on http://localhost: ' + app.get('port') +
      '; press Ctrl-C to terminate.');
  });
})();
