package db

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
	//"go.mongodb.org/mongo-driver/v2/mongo/readpref"
)

func CreateBlogCollection(ctx context.Context, db *mongo.Database) error {
	jsonSchema := bson.M{
		"bsonType": "object",
		"required": []string{"id", "title", "creation"},
		"properties": bson.M{
			"id": bson.M{
				"bsonType":    "int",
				"minimum":     0,
				"description": "ID number for blog",
			},
			"title": bson.M{
				"bsonType":    "string",
				"description": "Description for blog",
			},
			"creation": bson.M{
				"bsonType":    "timestamp",
				"description": "Timestamp for when blog was created",
			},
		},
	}

	validator := bson.M{
		"$jsonSchema": jsonSchema,
	}

	opts := options.CreateCollection().SetValidator(validator)
	err := db.CreateCollection(ctx, "blogs", opts)
	if err != nil {
		return err
	}

	return nil
}

func main() {
	ctx := context.Background()
	ctx, cancel := context.WithTimeout(ctx, 30*time.Second)
	defer cancel()

	credentials := options.Credential{
		AuthSource: "test",
		Username:   "myTester",
		Password:   "testing",
	}

	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017").SetAuth(credentials)

	client, err := mongo.Connect(clientOptions)
	defer client.Disconnect(ctx)

	if err != nil {
		log.Fatal(err)
	}

	//err = client.Ping(ctx, nil)
	//if err != nil {
	//	log.Fatal(err)
	//}
	//log.Println("Pinged!")

	db := client.Database("test", nil)
	if db == nil {
		log.Fatal("Cannot access database\n")
	}

	CreateBlogCollection(ctx, db)

	//// get databases
	//dbs, err := client.ListDatabaseNames(ctx, bson.D{}, nil)
	//if err != nil {
	//	log.Fatal(err)
	//}

	//for _, db := range dbs {
	//	log.Println(db)
	//}
}
