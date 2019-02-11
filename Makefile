copy_assets:
	cp -r ./book-generator/src/styles ./build
	cp -r ./book-generator/src/images ./build

build_book: copy_assets
	yarn --cwd ./book-generator run generate

build_pdf:
	docker run --rm \
		-v "`pwd`/build":/data \
		michaelperrin/prince:latest \
		-o /data/book.pdf \
		/data/book.html

build: build_book build_pdf
