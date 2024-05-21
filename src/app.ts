import express from "express";
import cors from "cors";
const app = express();

// parser middleware
app.use(express.json());
app.use(express.text());
app.use(cors());

// application routes here

app.get("/", (req, res) => {
  var a = 0;
  res.send("Hello World!");
});

export default app;
