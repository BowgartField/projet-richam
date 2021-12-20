import getConnect from "../../../utils/dbConnect";
const {ObjectId} = require('mongodb');

export default async function handler(req, res){

    // Get db connection
    const db = await getConnect();

    // Get collection
    const users = db.collection("users");

    const userToUpdate = req.body;
    const id = userToUpdate.id;
    
    delete userToUpdate.id;
    
    users.updateOne(
        {_id: ObjectId(id)},
        {$set: userToUpdate}      
    );

    res.status(200).json({message: "modified with sucess"});

}