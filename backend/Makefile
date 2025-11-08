.PHONY: build
build:
	go build -o build/backend cmd/backend/main.go

run:
	go run cmd/backend/main.go

clean:
	rm -rf build/*

tidy:
	go mod tidy
	go mod vendor
