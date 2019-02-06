import React from 'react';
import { renderToString } from 'react-dom/server';
import { writeFile } from 'fs';
import Book from './components/Book';
import htmlTemplate from './helpers/template';
import bookData from './book-data.json';

const jsx = (<Book title={bookData.title} albums={bookData.albums} />);
const reactDom = renderToString(jsx);
const res = htmlTemplate(reactDom);

writeFile('../build/book.html', res, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('The book was generated!');
});
