var evnt = require('events');
var evntemtr = new evnt.EventEmitter();

var animalhandler = function(){
  console.log("I bark when i see strangers !");
}

evntemtr.on('bark', animalhandler);

evntemtr.emit('bark');
