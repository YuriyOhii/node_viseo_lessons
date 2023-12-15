import express from "express";
import cors from "cors";
import moviesRouter from "./routes_api/movies-routes.js";

const app = express();

app.use(cors());
app.use("/api/movies", moviesRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
