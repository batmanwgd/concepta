## Using NodeJS with Axios
---
```js
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'subject': 'testing from postman',
  'text': 'testing from postman',
  'access_token': 'kc4rdpwqn6uwcvrzkvxmqpzc' 
});
var config = {
  method: 'post',
  url: 'https://postmail.invotes.com/send?subject=testing from postman&message=I sent this from postman',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

## Using NodeJS Native
---
```js
var https = require('follow-redirects').https;
var fs = require('fs');

var qs = require('querystring');

var options = {
  'method': 'POST',
  'hostname': 'postmail.invotes.com',
  'path': '/send?subject=testing%20from%20postman&message=I%20sent%20this%20from%20postman',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = qs.stringify({
  'subject': 'testing from postman',
  'text': 'testing from postman',
  'access_token': 'kc4rdpwqn6uwcvrzkvxmqpzc'
});

req.write(postData);

req.end();
```

### Using Vanilla JS and Fetch
```js
var myHeaders = new Headers();
myHeaders.append("Access-Control-Allow-Credentials", "true");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("subject", "testing from postman");
urlencoded.append("text", "testing from postman");
urlencoded.append("access_token", "kc4rdpwqn6uwcvrzkvxmqpzc");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://postmail.invotes.com/send?subject=testing from postman&message=I sent this from postman", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

### Using JS and Plain XHR direct as Postman Code
```js
var data = "subject=testing%20from%20postman&text=testing%20from%20postman&access_token=kc4rdpwqn6uwcvrzkvxmqpzc";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://postmail.invotes.com/send?subject=testing%20from%20postman&message=I%20sent%20this%20from%20postman");
xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);
```

#### Same as XHR but with my edits
```js
```
