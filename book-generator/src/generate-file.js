import React from 'react';
import { renderToString } from 'react-dom/server';
import Book from './components/Book';
import { writeFile } from 'fs';

const jsx = (<Book />);
const reactDom = renderToString(jsx);
const res = htmlTemplate(reactDom);

writeFile('../build/book.html', res, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log('The book was generated!');
});

function htmlTemplate(reactDom) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Book</title>
        </head>

        <body>
            <div id="app">${ reactDom}</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
