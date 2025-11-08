FROM golang:1.24

WORKDIR /app/backend

COPY . .

COPY ./go.mod ./go.sum /app/backend/

RUN go install github.com/air-verse/air@v1.62.0
RUN go mod download

EXPOSE 8080

CMD ["air", "-c", ".air.toml"]
