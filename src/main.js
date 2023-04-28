import express from "express";
import { saveOneDocument } from "./appmongo/insert.util.js";
const app = express();

app.get("/", (req, res) => {
  let message = { success: true };
  res.json(message);
});

app.get("/insert", async (req, res) => {
  let username = req.query.username || "default";
  let email = req.query.email || "default@gmail.com";

  let newDocument = { username, email };
  await saveOneDocument(newDocument);

  let message = { success: true };
  res.json(message);
});

app.listen(3000, () => console.log(`Example app listening on port 3000`));
