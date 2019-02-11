const fs = require('fs');
const http = require('https');

function downloadFile(url, filename) {
  if (fs.existsSync(filename)) {
    console.log('🔶 File already exists... skipping.');
    return;
  }

  const file = fs.createWriteStream(filename);

  http.get(url, (response) => {
    response.pipe(file);
  }).on('error', (err) => { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) {
      cb(err.message);
    }
  });
}

exports.downloadFile = downloadFile;
