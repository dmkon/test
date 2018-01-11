var $ = require('jquery');
var str = require('./constant');
require('./less');

var App = function() {
    console.log(str);
    $('body').html('<div class="b-test"><h3 class="b-test_heading">Heading</h3></div>');
};

var app = new App();
app.get = function() {};
