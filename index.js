var _ = require('underscore')

module.exports = parseMd

function parseMd(mdObj){
  // mdObj is an array
  var md = ''

  _.each(mdObj, function(o){

    if (_.isString(o)) {
      md += o + '\n\n'
    } else if (_.isArray(o)) {
      var prefix
      if (_.isArray(_.first(o))) { // ordered list
        o = _.first(o)
        prefix = '1.'
      } else { // unordered list
        prefix = '-'
      }
      _.each(o, function(v){
        md += prefix + ' ' + v + '\n'
      })
      md += '\n'
    } else if (_.isObject(o)) {
      _.each(o, function(v, k){
        md += k + '\n\n'
        md += parseMd(v)
      })
    }

  })

  return md
}