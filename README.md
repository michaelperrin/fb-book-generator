# Book generator

## 1️⃣ Download data from Facebook

1. Execute the *fb_scraper/browser-scraper.js* file in the browser console on Facebook albums (with active pop-in).
2. Save the output of the script to a JSON file in the *book_data* dir (file name is arbitrary).
3. Run the `make fetch_albums` to download pictures (they will be stored in a specific directory for each album in the *book_data* directory)

Images are now downloaded and the *book_data/albums.json* file is generated.

## 2️⃣ Generate book as HTML file

Run:

    make build_book

This will read the *book_data/albums.json* and generate the book as HTML/CSS with images in
the *build* directory by using React.

## 3️⃣ Generate PDF file from HTML file

This step generates the book from the HTML/CSS files to a PDF file, using [Prince](https://www.princexml.com/):

    make build_pdf
