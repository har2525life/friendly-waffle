// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// const PORT = 3000;

// const server = app.listen(PORT, () => {
//   console.log(`server listen port ${PORT}`);
// });

// app.post("/slack/message", async (req, res) => {
//   console.log(req.body.data);
//   const { name, email, type, description } = req.body.data;

//   const token = process.env.SLACK_TOKEN;

//   const channel = process.env.SLACK_CHANNEL;

//   const text = `名前: ${name} \n email: ${email} \n タイマーの種類: ${type} \n description: ${description}`;

//   const client = new WebClient(token);
//   const response = await client.chat.postMessage({ channel, text });
//   res.json({ status: "success" });
//   res.end();
//   console.log(response);
// });

// app.post("/slack/error", async (req, res) => {
//   console.log(req.body);
//   const errorData = req.body.data
//   const token = process.env.SLACK_TOKEN;

//   const channel = process.env.SLACK_CHANNEL_ERROR;

//   const client = new WebClient(token);
//   const response = await client.chat.postMessage({ channel, text: errorData });
//   res.json({ status: "success" });
//   res.end();
//   console.log(response);
// });

// app.get('/', async (req, res) => {
//   res.json({status: "success"})
// })

// app.get("/slack/message", (req, res) => {
//   console.log("test");
//   res.json({ test: "test" });
//   console.log("get methodを受信しました");
//   res.end();
// });

// const { WebClient } = require("@slack/web-api");

// // async function test() {
// //   const token = process.env.SLACK_TOKEN

// //   const channel = process.env.SLACK_CHANNEL;

// //   const text = "Hello";

// //   const client = new WebClient(token);
// //   const response = await client.chat.postMessage({ channel, text });

// //   console.log(response);
// // }

// // test();
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: &quot;Hello, World!&quot;
  });
}