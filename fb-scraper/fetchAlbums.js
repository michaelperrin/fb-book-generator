const fs = require('fs');
const { saveAlbums } = require('./helpers/saveAlbums');
const { downloadFile } = require('./helpers/downloadFile');
const { BOOK_DATA_DIR_PATH, ALBUMS_FILE_NAME } = require('./helpers/config');
const { eachLimit } = require('async');

function fetchAlbums() {
  const albums = [];

  let files = fs.readdirSync(BOOK_DATA_DIR_PATH);

  const picturesToDownload = [];

  files.forEach(file => {
    if (file.endsWith('.json') && file !== ALBUMS_FILE_NAME) {
      let data = fs.readFileSync(`${BOOK_DATA_DIR_PATH}/${file}`);
      let album = JSON.parse(data);
      let pictureDir = file.replace('.json', '');
      let picturePath = `${BOOK_DATA_DIR_PATH}/${pictureDir}`;
      // console.log(picturePath);
      // return;

      let i = 1;
      let newAlbum = {
        title: album.title,
        pictures: [],
      };

      // Create picture directory for album
      if (!fs.existsSync(picturePath)) {
        fs.mkdir(picturePath, { recursive: true }, (err) => {
          if (err) throw err;
        });
      }

      album.pictures.forEach(picture => {
        const fileName = `${pictureDir}/${i}.jpg`;
        const fileNameWithPath = `${picturePath}/${i}.jpg`;
        // console.log(`⬇️ Downloading file ${fileName}`)
        // downloadFile(picture.url, fileNameWithPath);
        picturesToDownload.push({ url: picture.url, fullPath: fileNameWithPath});

        newAlbum.pictures.push({
          name: fileName,
          description: picture.description,
        });

        i++;
      });

      albums.push(newAlbum);
    }
  });

  // Limit number of parallel downloads to avoid broken images
  // See https://stackoverflow.com/questions/19257366/how-to-synchronously-download-files-from-url-in-node-js
  var i = 1, threads = 5;
  eachLimit(picturesToDownload, threads, (pictureData, next) => {
    downloadFile(pictureData.url, pictureData.fullPath, next);
  }, () => {
    console.log('✅ Pictures successfully downloaded.');
  })

  saveAlbums(albums);
}

fetchAlbums();

