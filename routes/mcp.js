const express = require('express');
const router = express.Router();

// MCP Resource API
router.get('/resources', (req, res) => {
  res.json({
    resources: [
      {
        name: "ExampleDatabase",
        type: "postgres",
        connection: "postgresql://user:password@host:port/dbname"
      }
    ]
  });
});

// MCP Tool API
router.get('/tools', (req, res) => {
  res.json({
    tools: [
      {
        name: "WeatherAPI",
        description: "Fetches current weather information.",
        endpoint: "/tool/weather",
        input_schema: {
          city: "string"
        }
      }
    ]
  });
});

// MCP Prompt API
router.get('/prompts', (req, res) => {
  res.json({
    prompts: [
      {
        name: "Summarizer",
        description: "Summarizes a given article.",
        template: "Summarize the following text: {text}"
      }
    ]
  });
});

module.exports = router;
