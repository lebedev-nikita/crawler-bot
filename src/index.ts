import assert from "node:assert";
import express from "express";
import { bot } from "./bot.js";

const PORT = Number(process.env.PORT);
const MY_CHAT_ID = process.env.MY_CHAT_ID;
assert(!isNaN(PORT));
assert(MY_CHAT_ID);

express()
  .use(express.json())
  .post("/notify", (req, res) => {
    console.log(req.body);
    const message = req.body.message;

    if (typeof message == "string") {
      bot.sendMessage(MY_CHAT_ID, message);
      return res.sendStatus(200);
    }
    res.sendStatus(400);
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
