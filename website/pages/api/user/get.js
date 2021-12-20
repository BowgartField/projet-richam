import getConnect from "../../../utils/dbConnect";
const {ObjectId} = require('mongodb');

export default async function handler(req, res){

    // Get db connection
    const db = await getConnect();

    // Get collection
    const users = db.collection("users");

    const userToGet = req.body;

    let user;
    
    users.findOne(
        {_id: ObjectId(userToGet.id)},
        (err, result) => res.status(200).json(result)
    );

    

}