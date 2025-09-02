const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// File upload handling (optional for photo)
const upload = multer({ dest: "uploads/" });

app.post("/submit", upload.single("photo"), (req, res) => {
  console.log("Form Data Received:");
  console.log("Full Name:", req.body.fullname);
  console.log("Email:", req.body.email);
  console.log("Password:", req.body.password);
  console.log("Phone:", req.body.phone);
  console.log("DOB:", req.body.dob);
  console.log("Gender:", req.body.gender);
  console.log("Course:", req.body.course);
  console.log("Hobbies:", req.body.hobbies);
  console.log("Address:", req.body.address);
  if (req.file) {
    console.log("Uploaded File:", req.file.filename);
  }
  res.send("Form submitted successfully!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
