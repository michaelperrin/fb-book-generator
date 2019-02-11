const fs = require('fs');
const { BOOK_DATA_DIR_PATH, ALBUMS_FILE_NAME } = require('./config');

function saveAlbums(albums) {
  const albumsFileContent = JSON.stringify(albums, null, 2);

  fs.writeFile(`${BOOK_DATA_DIR_PATH}/${ALBUMS_FILE_NAME}`, albumsFileContent, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('✅ Album file is saved');
  });
}

exports.saveAlbums = saveAlbums;
