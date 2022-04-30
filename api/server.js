var cors = require('cors');
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/item';
const mongClient = new MongoClient(uri)

const express = require('express');
const app = express(),
    bodyParser = require("body-parser");
port = 3080;

const items = [];

app.use(bodyParser.json());
app.use(cors());

let v = [];

DBItems();
async function DBItems() {
    try {
        await mongClient.connect();
        v = await findDocuments('Category');

    } catch (e) {
        console.error(e);
    }
    finally {
        await mongClient.close();
        return v;
    }
}

async function findDocuments(collection) {
    let allValues = ''
    try {
        var cursor = await mongClient.db('Item').collection(collection).find({})
        allValues = await cursor.toArray();
    }
    catch (e) {
        console.error(e)
    }
    finally {
        return allValues;
    }
}

app.get('/api/items', (req, res) => {
    DBItems().then(function (resp) {
        const items = resp        
        res.json(items);
    });
    //res.json(DBItems());
});

/*app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});*/

// app.get('/', (req, res) => {
//     res.send(`App Works !!!! ${process.cwd()}`);
// });

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});