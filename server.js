// const { dirname } = require('@angular/compiler-cli/src/ngtsc/file_system');
// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static("./public  "));
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/dist/navbar/index.html'));
// });
// app.listen(process.env.PORT || 8080);
const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});