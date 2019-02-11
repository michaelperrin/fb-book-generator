function getPictureUrl() {
  return document.getElementsByClassName('spotlight')[0].getAttribute('src');
}

var descriptions = [];
var pictures = [];
var description;
var currentDescription;
var result = [];

var removeElements = (elms) => [...elms].forEach(el => el.remove());

function loadData(title) {
  var seeMore = document.getElementsByClassName('see_more_link_inner');

  if (seeMore.length) {
    seeMore[0].click();
  }

  var picturePath = document.getElementsByClassName('spotlight')[0].getAttribute('src');
  var picture = picturePath.substr(picturePath.lastIndexOf('/') + 1);

  // Get description element and remove useless elements
  var descriptionElt = document.getElementsByClassName('fbPhotosPhotoCaption')[0];
  removeElements(descriptionElt.querySelectorAll('.text_exposed_hide'));
  var description = descriptionElt.innerHTML;
  description = description.replace(new RegExp('<br>', 'g'), 'BRBRBR');
  description = description.replace(/<\/?[^>]+>/g, ''); // Strip tags
  description = description.replace(new RegExp('BRBRBR', 'g'), '<br>'); // Add br tags

  // Remove title
  description = description.replace(title, '');
  var regex = new RegExp('^<br>', 'g');
  description = description.replace(regex, '');
  description = description.trim();

  return {
    description: description,
    picture: picture
  };
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function loadAll(title) {
  var data = loadData(title);
  var description = data.description;

  if (pictures.indexOf(data.picture) === -1) {
    pictures.push(data.picture);

    result.push({
      url: getPictureUrl(),
      description: description
    });

    // Go to next picture
    document.getElementsByClassName('next')[0].click();

    sleep(Math.floor(Math.random() * 400) + 300).then(() => {
      loadAll(title);
    });
  } else {
    // The end of the slideshow is reached, display result
    console.log(JSON.stringify(result, null, 2));
  }
}

// eg. De BARBES à la Place CLICHY : l’embarras du choix pour se distraire….
var title = prompt('Entrer le titre du post');

loadAll(title);
