import getConnect from "../../../utils/dbConnect";

export default async function createUser(req, res) {

    // Get db connection
    const db = await getConnect();

    // Get collection
    const users = db.collection("users");

    const userToCreate = req.body;

    const preparedUser = {
        firstname: userToCreate.firstname,
        lastName: userToCreate.lastname,
        age: userToCreate.age
    };

    users.insertOne(preparedUser);

    res.status(200).json(preparedUser);

}