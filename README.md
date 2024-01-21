# mern-stack-peoplogy

npm install ejs express
npm install passport passport-google-oauth20
npm install dotenv

# https://www.passportjs.org/

# https://cloud.google.com/

# https://console.cloud.google.com/welcome?project=eastern-polygon-337802

- enable apis and services
- library
- enable google+ api
- credential
- create credential
- oauth client id
- select web
- add url http://localhost:3000 && http://localhost:3000/auth/google/redirect
- refer json (client id & client secret)
- go to passport-setup.js

test ignore .env file

mongodb
show dbs => show all databases
use <'db_name'> => switch db
=> insert single data
db.books.insertOne({
title: "hunter x hunter",
author: "Mike",
pages: 150,
rating: 10,
genres: ["adventure", "action"]
})
=> insert many data
db.books.insertMany([
{
title: "one piece",
author: "Oda",
pages: 1500,
rating: 10,
genres: ["adventure", "action", "supernatural"]
},
{
title: "naruto",
author: "Yamato",
pages: 300,
rating: 9,
genres: ["action", "ninja"]
}
])
db.books.find() => get all data
db.books.findOne({author: "Shahrul"}) => get a single data
db.books.findOne({\_id: ObjectId('65ac7d073801210ebb5d03b9')}) => get a single data
db.books.find({genres: "action"}) => get all data with genres = "action"
db.books.findOne({\_id: ObjectId('65ac7d073801210ebb5d03b9')}, {title:1}) => get single data and display single property = title
db.books.find({}, {title:1}) => get all data and display single property = title
db.books.find({title: "one piece", author: "Oda"}) => get data based on title and author
db.books.countDocuments() => get total data count
db.books.find({author: "Shahrul"}).count() => get total data count filter by author
db.books.find().limit(2) => get with limited 2 data
db.books.find().sort({rating:1}) => sorting data by rating
db.books.find().sort({rating:-1}) => sorting data by rating Desc
db.books.find({rating: {$lt: 10}}) => filter rating less than
db.books.find({rating: {$gte: 10}}) => filter rating greater than equal
db.books.find({$or: [{rating:9}, {rating:5}]}) => find rating 5 or 9
db.books.find({rating:{$in: [5,9]}}) => find rating with IN sql
db.books.find({rating:{$nin: [5,9]}}) => find rating with NOT IN sql
db.tasks.deleteOne({\_id: ObjectId('65ac89d73801210ebb5d03ba')}) => delete a single record
db.tasks.deleteMany({author:"sam}) => delete many record that match author = sam
db.tasks.updateOne({_id: ObjectId('65ac89d73801210ebb5d03bb')}, {$set: {name: "Shahrul", age:30}}) => update record
db.tasks.updateMany({age: 20}, {$set: {age: 30}}) => update records
db.tasks.updateOne({_id: ObjectId('65ac89d73801210ebb5d03bb')}, {$inc: {age: 3}}) => increament property
