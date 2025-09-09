FROM golang:1.24

WORKDIR /app

COPY . /app

WORKDIR /app/src

COPY ./src/go.mod ./src/go.sum /app/src/

RUN go install github.com/air-verse/air@v1.62.0
RUN go mod download

EXPOSE 8080

CMD ["air", "-c", ".air.toml"]
