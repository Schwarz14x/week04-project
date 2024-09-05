// server.js
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8080, function () {
  console.log(`Server is running on port 8080`);
});
