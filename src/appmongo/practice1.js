import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const readOneUser = async () => {
  const client = new MongoClient(uri);

  const usersColl = client.db("practice").collection("users");

  let resultDoc = await usersColl.findOne();
  console.log(resultDoc);

  client.close();
};

readOneUser();
