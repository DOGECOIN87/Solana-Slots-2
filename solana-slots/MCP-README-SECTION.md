## Multi-Agent Collaboration with MCP Servers

This project utilizes the Model Context Protocol (MCP) to enable AI-assisted development through specialized agents:

### Available MCP Servers

- **Context7**: Code navigation and context understanding
- **Research Agent**: Information lookup for Solana, Anchor, and VRF
- **Figma Agent**: UI/UX design assistance
- **Code Review Agent**: Code quality and security reviews
- **VRF MCP Server**: Specialized tools for Switchboard VRF integration

### Quick Start

1. Set up the MCP servers:
   ```bash
   ./scripts/setup-mcp-servers.sh
   ```

2. Start Context7 for code navigation:
   ```bash
   npx context7-mcp --stdio
   ```

3. Use any of the agents in your workflow:
   ```
   # Example: Research Switchboard VRF
   <use_mcp_tool>
   <server_name>research-agent</server_name>
   <tool_name>search</tool_name>
   <arguments>
   {
     "query": "Switchboard VRF v3 implementation"
   }
   </arguments>
   </use_mcp_tool>
   ```

For detailed documentation on using MCP servers, see [docs/MCP-SERVERS.md](./docs/MCP-SERVERS.md).
