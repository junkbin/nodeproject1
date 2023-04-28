import express from "express";
const app = express();

import { MongoClient } from "mongodb";

app.get("/", (req, res) => {
  let message = { success: true };
  res.json(message);
});

app.get("/insert1", async (req, res) => {
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri);
  const usersColl = client.db("practice").collection("users");

  let newDocument = { username: "delhi" };
  let resultDoc = await usersColl.insertOne(newDocument);
  console.log(resultDoc);
  client.close();

  let message = { success: true };
  res.json(message);
});

app.get("/insert2", async (req, res) => {
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri);
  const usersColl = client.db("practice").collection("users");

  let username = req.query.username || "delhi";

  let newDocument = { username: username };
  let resultDoc = await usersColl.insertOne(newDocument);
  console.log(resultDoc);
  client.close();

  let message = { success: true };
  res.json(message);
});

app.get("/insert3", async (req, res) => {
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri);
  const usersColl = client.db("practice").collection("users");

  let username = req.query.username || "delhi";

  let newDocument = { username: username };
  let resultDoc = await usersColl.insertOne(newDocument);
  console.log(resultDoc);
  client.close();

  let message = { success: true };
  res.json(message);
});

app.listen(3000, () => console.log(`Example app listening on port 3000`));
