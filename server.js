const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MCP Routes
const mcpRoutes = require('./routes/mcp');
app.use('/.well-known/mcp', mcpRoutes);

app.listen(port, () => {
  console.log(`MCP server is running on port ${port}`);
});
