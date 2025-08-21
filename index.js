// --- Application Insights (classic SDK) ---
// Uses env var APPLICATIONINSIGHTS_CONNECTION_STRING (set by Terraform in your Web App)
if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
  const appInsights = require("applicationinsights");
  appInsights
    .setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
    .setAutoCollectDependencies(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectRequests(true)
    .setSendLiveMetrics(false)
    .start();
  console.log("Application Insights initialized");
} else {
  console.log("Application Insights skipped - no connection string provided");
}

const express = require("express");
const app = express();

// Simple routes
app.get("/", (_req, res) => {
  res.type("text/plain").send("Hello World");
});

app.get("/healthz", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// App Service injects the port via process.env.PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

// Graceful shutdown (optional but nice)
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down.");
  process.exit(0);
});
