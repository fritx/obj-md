var parseMd = require('../')
var assert = require('assert')
var fs = require('fs')
var path = require('path')

describe('obj-md', function(){

  testPair('0')
  testPair('1')

})

function testPair(entry){
  it('parses', function(){
    var input = require(f(entry + '.js'))
    var expected = readFile(f(entry + '.md')).trim() // ignore trailing  
    var output = parseMd(input).trim()
    assert.equal(output, expected)
  })
}

function readFile(file){
  return fs.readFileSync(file).toString()
}
function f(file){
  return path.resolve(__dirname, 'fixtures', file)
}