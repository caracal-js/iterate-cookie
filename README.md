# Iterate-Cookie
Tokenizer for `Set-Cookie` and `document.cookie` setter.

## Example:

```javascript
var Cookie = require('./index.js'),
  cookie = new Cookie('foo=bar;');
  
cookie.value = 'kitty';
console.log(cookie.serialize()); // Outputs foo=kitty;
```

## Parameters:
  - `name` **[String]** Cookie name
  - `value` **[String]** Cookie value
  - `domain` **[String]** Domain
  - `secure` **[Boolean]** Secure
  - `http_only` **[Boolean]** HttpOnly
  - `same_site` **[Boolean]** SameSite
  - `path` **[String]** Path
  - `expires` **[String]** Expires
  - `max_age` **[String]** Max-Age
  - 
## Prototype:
  - `serialize` **[Function]** Generate the AST into a string

## Todo:
- Add tokenization for `cookie` request header


