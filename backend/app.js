const path = require ("path");
const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const deptsRoutes = require("./routes/deptsrouter");
const userRoutes = require("./routes/userrouter");
const desigsRoutes = require("./routes/desigsrouter");
const hrasRoutes = require("./routes/hrasrouter");
const groupsRoutes = require("./routes/groupsrouter");
const empsRoutes = require("./routes/empsrouter");
const loansRoutes = require("./routes/loansrouter");
const paytransRoutes = require("./routes/paytransrouter");
const dasRoutes = require("./routes/dasrouter");
const basictypesRoutes = require("./routes/basictypesrouter");
const emptypesRoutes = require("./routes/emptypesrouter");
const pmatrixsRoutes = require("./routes/pmatrixsrouter");
const itnewempsRoutes = require("./routes/itnewempsrouter");

const app = express();


mongoose.connect("mongodb://localhost:27017/PayManagement")
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection Failed!')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS");

  next();
});



app.use("/api/depts", deptsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/desigs", desigsRoutes);
app.use("/api/hras", hrasRoutes);
app.use("/api/groups", groupsRoutes);
app.use("/api/emps", empsRoutes);
app.use("/api/loans", loansRoutes);
app.use("/api/paytrans", paytransRoutes);
app.use("/api/das", dasRoutes);
app.use("/api/basictypes", basictypesRoutes);
app.use("/api/emptypes", emptypesRoutes);
app.use("/api/pmatrixs", pmatrixsRoutes);
app.use("/api/itnewemps", itnewempsRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular","index.html"));
});

module.exports = app;
