const { MongoClient } = require('mongodb');

const dbName = "users";
const url = 'mongodb://localhost:8080';
const client = new MongoClient(url);

export default async function getConnect(){

    await client.connect();
    return client.db(dbName);
    
}
