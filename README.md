# Iterate-Cookie
`Set-Cookie` & `document.cookie` setter parser.

## Example:

```javascript
var Cookie = require('./index.js'),
  cookie = new Cookie('foo=bar;');
  
cookie.value = 'kitty';
console.log(cookie.serialize()); // Outputs foo=kitty;
```

## Parameters:
  - `cookie.domain` **[String]** Domain
  - `cookie.secure` **[Boolean]** Secure
  - `cookie.http_only` **[Boolean]** HttpOnly
  - `cookie.same_site` **[Boolean]** SameSite
  - `cookie.path` **[String]** Path
  - `cookie.expires` **[String]** Expires
  - `cookie.max_age` **[String]** Max-Age

## Todo:
- Add parsing for `cookie` request header


