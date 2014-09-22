# obj-md

Parses js obj to markdown

## Usage

```javascript
var parseMd = require('obj-md')
var md = parseMdObj(mdObj)
console.log(md)
```

Expects:

```markdown
# Memo

Stuffs to deal with

## Todo

- Code
- Go to bed

## Done

1. Housework
1. Read
```

Inputs:

```javascript
[
  {
    '# Memo': [
      'Stuffs to deal with',
      {
        '## Todo': [
          ['Code', 'Go to bed'] // unordered list
        ],
        '## Done': [
          [['Housework', 'Read']] // ordered list
        ]
      }
    ]
  }
]
```