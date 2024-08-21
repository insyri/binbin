import express from "express";
import { createPool, createConnection } from "mariadb";

const hostname = "127.0.0.1";
const port = 3000;
// const envPath = process.argv[2];
const envPath = "./../.env";

enum Result {
  Ok,
  Err,
}

const s: Map<
  string,
  <T extends Record<string, unknown>, R>(x?: T) => [R, Result]
> = new Map();

const app = express();

// REGISTER ID
// last name
// first name
// student id
app.post("/register", function (res, req) {});

app.put("/mark-received", function (res, req) {});

app.get("/search-id", function (res, req) {});

app.get("/entries", function (res, req) {});

app.get("/received", function (res, req) {});

// -->> received = false

// MARK ID AS RECIEVED
// student id

// SEARCH ID
// student id

// NUMBER OF ENTRIES

// NUMBER OF IDs RECEIVED

app.listen(port, hostname, () => {
  // console.log("Attempting to connect to read `.env` file.");

  console.log(`Server running at http://${hostname}:${port}/`);
});
