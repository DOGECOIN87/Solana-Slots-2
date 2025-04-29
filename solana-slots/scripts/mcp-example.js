#!/usr/bin/env node
/**
 * Example script demonstrating how to use MCP servers programmatically
 * 
 * This script shows how to:
 * 1. Start Context7 MCP server
 * 2. Make a request to get code context
 * 3. Programmatically process the response
 */

const { spawn } = require('child_process');
const readline = require('readline');

// Configuration
const MCPServerCommand = 'context7-mcp';
const MCPServerArgs = ['--stdio'];

// Start the MCP server process
console.log('Starting Context7 MCP server...');
const mcpProcess = spawn(MCPServerCommand, MCPServerArgs);

// Create interface for reading/writing to the MCP server
const rl = readline.createInterface({
  input: mcpProcess.stdout,
  output: mcpProcess.stdin,
  terminal: false
});

// Handle errors from the MCP server
mcpProcess.stderr.on('data', (data) => {
  console.error(`MCP server error: ${data}`);
});

// Example request to send to the MCP server
const exampleRequest = {
  server_name: "context7",
  tool_name: "get_code_context",
  arguments: {
    query: "How is the slot machine UI implemented?",
    files: ["src/components/SlotMachine.jsx"]
  }
};

// Send the request to the MCP server
console.log('Sending request to Context7 MCP server...');
rl.output.write(JSON.stringify(exampleRequest) + '\n');

// Handle the response from the MCP server
rl.on('line', (line) => {
  try {
    const response = JSON.parse(line);
    console.log('Received response from MCP server:');
    console.log(JSON.stringify(response, null, 2));
    
    // Process the response
    if (response.result) {
      console.log('\nProcessing result...');
      // Do something with the result
      console.log('Found information about:', 
                  response.result.mentioned_files || 'No files mentioned');
    }
    
    // Clean up
    console.log('\nClosing MCP server connection...');
    mcpProcess.kill();
    process.exit(0);
  } catch (error) {
    console.error('Error parsing MCP server response:', error);
  }
});

// Set a timeout to prevent the script from hanging
setTimeout(() => {
  console.log('Timeout - no response received from MCP server');
  mcpProcess.kill();
  process.exit(1);
}, 30000);

console.log('Waiting for response...');
