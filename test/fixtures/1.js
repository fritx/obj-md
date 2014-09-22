module.exports = [
  {
    '# obj-md': [
      'Parses js obj to markdown',
      {
        '## Usage': [
          "```javascript\n\
var parseMd = require('obj-md')\n\
var md = parseMdObj(mdObj)\n\
console.log(md)\n\
```",
          'Expects:',
          '```markdown\n\
# Memo\n\
\n\
Stuffs to deal with\n\
\n\
## Todo\n\
\n\
- Code\n\
- Go to bed\n\
\n\
## Done\n\
\n\
1. Housework\n\
1. Read\n\
```',
          'Inputs:',
          "```javascript\n\
[\n\
  {\n\
    '# Memo': [\n\
      'Stuffs to deal with',\n\
      {\n\
        '## Todo': [\n\
          ['Code', 'Go to bed'] // unordered list\n\
        ],\n\
        '## Done': [\n\
          [['Housework', 'Read']] // ordered list\n\
        ]\n\
      }\n\
    ]\n\
  }\n\
]\n\
```"
        ]
      }
    ]
  }
]