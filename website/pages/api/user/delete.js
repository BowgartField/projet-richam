const {ObjectId} = require('mongodb');
import getConnect from "../../../utils/dbConnect";

export default async function handler(req,res){

    const db = await getConnect();

    const users = db.collection("users");

    const userToDelete = req.body;

    users.deleteOne({_id: ObjectId(userToDelete.id)});

    res.status(200).json({
        message : "user deleted with sucess"
    });

}