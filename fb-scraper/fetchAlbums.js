const fs = require('fs');
const { saveAlbums } = require('./helpers/saveAlbums');
const { downloadFile } = require('./helpers/downloadFile');
const { BOOK_DATA_DIR_PATH, ALBUMS_FILE_NAME } = require('./helpers/config');

function fetchAlbums() {
  const albums = [];

  let files = fs.readdirSync(BOOK_DATA_DIR_PATH);

  files.forEach(file => {
    if (file.endsWith('.json') && file !== ALBUMS_FILE_NAME) {
      let data = fs.readFileSync(`${BOOK_DATA_DIR_PATH}/${file}`);
      let album = JSON.parse(data);
      let pictureDir = `${BOOK_DATA_DIR_PATH}/${file.replace('.json', '')}`;

      let i = 1;
      let newAlbum = {
        title: album.title,
        pictures: [],
      };

      // Create picture directory for album
      if (!fs.existsSync(pictureDir)) {
        fs.mkdir(pictureDir, { recursive: true }, (err) => {
          if (err) throw err;
        });
      }

      album.pictures.forEach(picture => {
        const fileName = `${pictureDir}/${i}.jpg`;
        console.log(`⬇️ Downloading file ${fileName}`)
        downloadFile(picture.url, fileName);

        newAlbum.pictures.push({
          name: `${file}/${i}.jpg`,
          description: album.description,
        });

        i++;
      });

      albums.push(newAlbum);
    }
  });

  saveAlbums(albums);
}

fetchAlbums();

