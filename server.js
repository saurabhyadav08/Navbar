const { dirname } = require('@angular/compiler-cli/src/ngtsc/file_system');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(dirname + '/dist/navbar'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/navbar/index.html'));
});
app.listen(process.env.PORT || 8080);