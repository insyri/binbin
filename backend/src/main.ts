import express from "express";
import { createPool, createConnection } from "mysql";

const hostname = "127.0.0.1";
const port = 3000;

enum Result {
  Ok,
  Err,
}

const s: Map<
  string,
  <T extends Record<string, unknown>, R>(x?: T) => [R, Result]
> = new Map();

const conn = createConnection({
  user: process.env["username"],    
  password: process.env["password"],
  host: process.env["host"],
  port: Number(process.env["port"]),
  database: process.env["database"],
});

const app = express();

// REGISTER ID
// last name
// first name
// student id
/*
app.post("/register", function (res, req) {});

app.put("/mark-received", function (res, req) {});

app.get("/search-id", function (res, req) {});

app.get("/entries", function (res, req) {});
*/

app.get("/received", function (res, req) {});

// -->> received = false

// MARK ID AS RECIEVED
// student id

// SEARCH ID
// student id

// NUMBER OF ENTRIES

// NUMBER OF IDs RECEIVED

app.listen(port, hostname, () => {
  console.log("Attempting to connect to database.");
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database.");
  }); 

  console.log(`Server running at http://${hostname}:${port}/`);
});
