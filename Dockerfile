FROM golang:1.24

WORKDIR /subeenregmi.com

COPY . .

WORKDIR src

RUN go mod download
RUN go build -v -o /usr/local/bin/app .

EXPOSE 8080
CMD ["app"]
