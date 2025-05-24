const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const http = require("http");

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");
const userRouter = require("./routes/user");
const { initializeSocket } = require("./utils/socket");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

const server = http.createServer(app);
initializeSocket(server);

app.patch("/test", (req, res) => {
  res.json({ message: "Test successful!" });
});

// Connect to database and start server
connectDB()
  .then(() => {
    console.log("Database successfully established");
    server.listen(4444, () => {
      console.log("Server is successfully listening on port 4444");
    });
  })
  .catch((err) => {
    console.log("Database failed to connect");
  });
