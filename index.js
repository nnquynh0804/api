const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// GET /api/project
app.get("/api/project", (req, res) => {
  res.json([
    { id: 1, name: "Dự án A", description: "Mô tả A" },
    { id: 2, name: "Dự án B", description: "Mô tả B" }
  ]);
});

// POST /api/bpmn
app.post("/api/bpmn", (req, res) => {
  console.log("Received BPMN data:", req.body);
  res.status(201).json({ message: "BPMN uploaded successfully" });
});

// POST /api/ai/requirements/approve
app.post("/api/ai/requirements/approve", (req, res) => {
  console.log("AI Requirement Approved:", req.body);
  res.json({ status: "approved", data: req.body });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend API server is running on http://localhost:${PORT}`);
});
