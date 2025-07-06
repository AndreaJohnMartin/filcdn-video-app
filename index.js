console.log("✅ Server is starting...");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

const app = express();
const port = 3001;

const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

const API_KEY = "e6419d4d.0d8dfdc5c50542fba20b89c37d0f070e";

app.post("/upload", upload.single("video"), async (req, res) => {
  try {
    const filePath = path.join(__dirname, req.file.path);
    console.log("📁 Uploading file from:", filePath);

    const form = new FormData();
    form.append("file", fs.createReadStream(filePath));

    const response = await axios.post(
      "https://node.lighthouse.storage/api/v0/add",
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const cid = response.data.Hash;
    console.log("✅ Upload success:", cid);

    // Optionally delete temp file
    fs.unlinkSync(filePath);

    return res.json({ cid });
  } catch (err) {
    console.error("❌ Upload error:", err.message);
    return res.status(500).json({
      error: err.message || "Unknown server error",
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
