var parseMd = require('../')
var assert = require('assert')
var fs = require('fs')
var path = require('path')

describe('obj-md', function(){

  testPair('0')
  testPair('1')

  it('takes empty list', function(){
    testEqual([
      {
        '## empty list': [
          [],
          'another line'
        ]
      }
    ], '## empty list\n\
\n\
another line')
  })

})

function testPair(entry){
  it('parses', function(){
    var input = require(f(entry + '.js'))
    var expected = readFile(f(entry + '.md'))
    testEqual(input, expected)
  })
}

function testEqual(input, expected){
  var output = parseMd(input).trim()
  assert.equal(output.trim(), expected.trim())  // ignore trailing
}

function readFile(file){
  return fs.readFileSync(file).toString()
}
function f(file){
  return path.resolve(__dirname, 'fixtures', file)
}