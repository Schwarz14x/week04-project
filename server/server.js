import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config(); // let us use the environement variables from .env (please)

// connect to our database
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", function (request, response) {
  response.json("all teams info");
});

app.get("/premier_league", async function (request, response) {
  // query the databse and get the jokes
  const premier_league = await db.query("SELECT * FROM premier_league");
  response.json(premier_league.rows);
});

app.post("/premier_league", function (request, response) {
  response.json(request.body); // we are sending back the thing we go, to prove we got it!
});

app.listen(8080, function () {
  console.log("App running on port 8080");
});
