require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", bookRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});