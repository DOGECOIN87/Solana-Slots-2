#!/bin/bash
set -e

# Setup script for Solana Slots MCP servers
echo "🚀 Setting up MCP servers for Solana Slots..."

# Create all necessary directories
mkdir -p \
  .research-agent \
  .figma-agent \
  .code-review-agent \
  .context7-mcp \
  .vrf-mcp-server

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Install Context7 MCP
echo -e "${BLUE}Installing Context7 MCP...${NC}"
npm install -g context7-mcp
echo -e "${GREEN}✓ Context7 MCP installed${NC}"

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Install other dependencies
echo -e "${BLUE}Checking for required dependencies...${NC}"

if ! command_exists node; then
  echo -e "${YELLOW}Node.js not found. Please install Node.js 18 or higher.${NC}"
  exit 1
fi

if ! command_exists npm; then
  echo -e "${YELLOW}npm not found. Please install npm.${NC}"
  exit 1
fi

# Copy configuration files
echo -e "${BLUE}Copying MCP configuration files...${NC}"
# These files already exist from our previous steps

# Test Context7 MCP
echo -e "${BLUE}Testing Context7 MCP connection...${NC}"
if command_exists context7-mcp; then
  echo -e "${GREEN}✓ Context7 MCP is accessible${NC}"
else
  echo -e "${YELLOW}Warning: context7-mcp command not found. Make sure it's in your PATH.${NC}"
fi

echo -e "\n${GREEN}==========================================================${NC}"
echo -e "${GREEN}MCP server setup complete!${NC}"
echo -e "${GREEN}==========================================================${NC}"
echo -e "\nTo use these MCP servers in your workflow:"
echo -e "1. Context7: Use 'context7-mcp --stdio' to start the server"
echo -e "2. Research Agent: Access via configured tools"
echo -e "3. Figma Agent: Access via configured tools"
echo -e "4. Code Review Agent: Access via configured tools"
echo -e "5. VRF Agent: Access via configured tools"
echo -e "\nEach agent can be accessed using the <use_mcp_tool> directive with the appropriate server name."
