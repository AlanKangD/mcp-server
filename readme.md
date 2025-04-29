docker build -t mcp-server 


docker run -d -p 3000:3000 --name mcp-server-container mcp-server.
