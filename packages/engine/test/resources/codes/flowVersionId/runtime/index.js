import express from "express";

const app = express();
app.use(express.json());

// Route for your AI Agent logic
app.post("/run", async (req, res) => {
  try {
    const params = req.body;

    // Your original code logic
    const result = await (async (params) => {
      // Example: replace this with your actual logic
      if (!params || Object.keys(params).length === 0) {
        throw new Error("Missing parameters");
      }

      // Do something useful here
      return { message: "AI Agent executed successfully", params };
    })(params);

    res.json({ success: true, result });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Basic GET route for Render health check
app.get("/", (req, res) => {
  res.send("AI Agent is running ✅");
});

// Start server on the Render-assigned port
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
