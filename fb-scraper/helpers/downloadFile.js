const fs = require('fs');
const http = require('https');

function downloadFile(url, filename, callback) {
  if (fs.existsSync(filename)) {
    console.log('🔶 File already exists... skipping.');
    callback();
    return;
  }

  const file = fs.createWriteStream(filename);

  file.on('error', (err) => { // Handle errors
    fs.unlink(filename); // Delete the file async. (But we don't check the result)
    console.log(`❌ ${err.message}`)
  });

  const request = http.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.log('Response status was ' + response.statusCode);
      return;
    }

    file.on('finish', () => {
      file.close();
      callback();
    });

    response.pipe(file);
  });

  request.on('error', (err) => { // Handle errors
    fs.unlink(filename); // Delete the file async. (But we don't check the result)
    console.log(err.message);
  });
}

exports.downloadFile = downloadFile;
