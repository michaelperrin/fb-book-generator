function downloadPicture() {
    var a = document.createElement('a');
    var picturePath = document.getElementsByClassName('spotlight')[0].getAttribute("src");
    a.href = picturePath;
    a.download = "output.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    return picturePath;
}

// var pictures = [];
var descriptions = [];
var pictures = [];
var description;
var currentDescription;
var result = [];

function loadData() {
    var seeMore = document.getElementsByClassName('see_more_link_inner');

    if (seeMore.length) {
        seeMore[0].click();
    }

    var picturePath = document.getElementsByClassName('spotlight')[0].getAttribute("src");
    var picture = picturePath.substr(picturePath.lastIndexOf('/') + 1);

    var description = document.getElementsByClassName('fbPhotosPhotoCaption')[0].innerHTML;

    return {
        description: description,
        picture: picture
    };
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function loadAll() {
    var data = loadData();
    var description = data.description;

    if (pictures.indexOf(data.picture) === -1) { // TODO remove
        pictures.push(data.picture);
        downloadPicture();

        result.push({
            pictureName: data.picture,
            description: description
        });

        // Go to next picture
        document.getElementsByClassName('next')[0].click();

        sleep(Math.floor(Math.random() * 1800) + 500).then(() => {
            loadAll();
        });
    } else {
        console.log(result);
    }
}

loadAll();
// console.log(result);

// function generateBook() {
//     var pictures = loadAll();

//     var bookElt = document.createElement('div');
//     var pageElt = document.createElement('div');

//     for (var i = 0; i < pictures.length; i++) {
//         if (i % 3 === 0) {
//             bookElt.appendChild(pageElt);
//             pageElt.innerHTML = '';
//         }

//         var pictureElt = document.createElement('div');
//         pictureElt.className = 'picture';

//         var imgElt = document.createElement('img');
//         imgElt.src = pictures[i].pictureName;

//         var descriptionElt = document.createElement('div');
//         descriptionElt.innerHTML = pictures[i].description;

//         pictureElt.appendChild(imgElt);
//         pictureElt.appendChild(descriptionElt);

//         pageElt.appendChild(pictureElt);

//     }

//     bookElt.appendChild(pageElt);

//     console.log(bookElt.innerHTML);
// }

generateBook();





// TODO “See more” click

6 photos par page



var a = document.createElement('a');
a.href = document.getElementsByClassName('spotlight')[0].getAttribute("src");
a.download = "output.png";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);


6 images par page
Page de droite : descriptions
30 images par album
=> 30/6*2 = 10 pages par album

Avec 9 images par page
30/9*2 = 8 pages par album

Livre de 100 pages avec 9 images par page : 100/8 = 13 albums



Grand poche 15*23cm
3 photos par page + texte à droite
8€ pour 24 pages + 0.09 par page supplémentaire
480 pages : 51€ - 480*3 = 1440 photos = 48 albums de 30 photos

//
