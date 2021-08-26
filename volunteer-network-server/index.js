const express = require('express')

const app = express()
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()
console.log(process.env.DB_USER)
const port = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gyuhd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log(err)
  const eventsCollection = client.db("Volunteer").collection("events");
  // perform actions on the collection object
console.log('database connected')

app.get('/events',(req,res)=>{
    eventsCollection.find({})
    .toArray((err,items)=>{
        res.send(items)
    })
})
app.post('/addEvent',(req,res)=>{
    const newEvent=req.body;
    console.log(newEvent)
    eventsCollection.insertOne(newEvent)
    .then(result=>{
        console.log( result.insertedCount)
        res.json(result.insertedCount>0)
    })
})

app.delete('eventDelete/:id',(req,res)=>{
    const id=ObjectID(req.params.id)
    console.log('delete id',id)
    eventsCollection.findOneAndDelete({_id:id})
    .then(document=>res.send(!!document.value))

})
});


app.listen(port)