const express = require("express");

const app = express();

// Import destination data
const destinations = require("./data/destinations");

// Import matching algorithm
const { findMatches } = require("./utils/matcher");

const travelProfiles = [];

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve CSS and JavaScript from public folder
app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.commitId = process.env.COMMIT_ID || "development";
  next();
});


// ====================
// HOME PAGE
// ====================
app.get("/", (req, res) => {
  res.render("index");
});


// ====================
// TRAVEL MATCHER FORM
// ====================
app.get("/matcher", (req, res) => {
  res.render("matcher");
});


// ====================
// MATCHING ALGORITHM
// ====================
app.post("/match", (req, res) => {

  const preferences = req.body;

  // Save the user's travel profile on the server
  const profile = {
    id: travelProfiles.length + 1,
    ...preferences
  };

  travelProfiles.push(profile);

  // Find destinations matching user's preferences
  const results = findMatches(destinations, preferences);

  // Send results to results.ejs
  res.render("results", {
    results: results,
    preferences: preferences
  });
});

app.get("/saved-trips", (req, res) => {

  res.render("saved-trips", {
    profiles: travelProfiles
  });

});


// ====================
// JSON API
// ====================
app.get("/api/destinations", (req, res) => {
  res.json(destinations);
});


// ====================
// HEALTH CHECK
// ====================
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    commit: process.env.COMMIT_ID || "development"
  });
});


// Export app
module.exports = app;