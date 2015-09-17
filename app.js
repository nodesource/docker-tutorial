var pg = require('pg')
var retry = require('retry')

console.log("Hello World!")

var operation = retry.operation({retries:3})

operation.attempt(function() {
  var client = new pg.Client()
  client.connect(function(e) {
    client.end()
    if(operation.retry(e)) {
      return;
    }
    if(!e) console.log("Hello Postgres!")
  })
})

