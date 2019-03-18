copy_assets:
	cp -r ./book-generator/src/styles ./build
	cp -r ./book-generator/src/images ./build

fetch_albums:
	cd fb-scraper
	node fetchAlbums.js

build_book: copy_assets
	yarn --cwd ./book-generator run generate

build_pdf:
	docker run --rm \
		-v "`pwd`/build":/data \
		michaelperrin/prince:latest \
		-o /data/book.pdf \
		/data/book.html

make_pdf_local_prince:
	/Users/michael/Downloads/prince-12.4-macosx/lib/prince/bin/prince \
		-o build/book.pdf \
		build/book.html

build: build_book build_pdf
