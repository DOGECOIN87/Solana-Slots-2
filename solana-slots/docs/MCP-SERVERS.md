# MCP Servers for Solana Slots

This document outlines the Model Context Protocol (MCP) servers configured for the Solana Slots project and explains how to use them in your development workflow.

## Overview

The Solana Slots project uses the following MCP servers:

1. **Context7** - For code context understanding and navigation
2. **Research Agent** - For information lookup on Solana, Anchor, and VRF
3. **Figma Agent** - For UI/UX design and asset generation
4. **Code Review Agent** - For code quality and security reviews
5. **VRF MCP Server** - Specialized tools for Switchboard VRF integration

## Setup

Run the setup script to install and configure the MCP servers:

```bash
cd solana-slots
./scripts/setup-mcp-servers.sh
```

## Using MCP Servers

### Context7

Context7 provides code context and understanding. To start the server:

```bash
npx context7-mcp --stdio
```

Example usage:
```
<use_mcp_tool>
<server_name>context7</server_name>
<tool_name>get_code_context</tool_name>
<arguments>
{
  "query": "How does the slot machine determine winning combinations?",
  "files": ["src/components/SlotMachine.jsx"]
}
</arguments>
</use_mcp_tool>
```

### Research Agent

For research on Solana, Anchor, and VRF-related topics:

```
<use_mcp_tool>
<server_name>research-agent</server_name>
<tool_name>search</tool_name>
<arguments>
{
  "query": "Switchboard VRF v3 implementation details"
}
</arguments>
</use_mcp_tool>
```

### Figma Agent

For UI/UX design tasks:

```
<use_mcp_tool>
<server_name>figma-agent</server_name>
<tool_name>create_wireframe</tool_name>
<arguments>
{
  "viewportType": "desktop",
  "components": ["slotMachine", "walletConnect", "wagerControls"]
}
</arguments>
</use_mcp_tool>
```

### Code Review Agent

For code quality and security reviews:

```
<use_mcp_tool>
<server_name>code-review-agent</server_name>
<tool_name>analyze_code</tool_name>
<arguments>
{
  "path": "programs/solana_slots_vrf/src/lib.rs",
  "rules": ["security", "performance"]
}
</arguments>
</use_mcp_tool>
```

### VRF MCP Server

For Switchboard VRF integration:

```
<use_mcp_tool>
<server_name>vrf-mcp-server</server_name>
<tool_name>generate_anchor_vrf_program</tool_name>
<arguments>
{
  "programName": "solana_slots_vrf",
  "features": ["with-payout", "with-history"],
  "outputPath": "programs/solana_slots_vrf/src"
}
</arguments>
</use_mcp_tool>
```

## Multi-Agent Workflow

The recommended workflow for using these MCP servers is:

1. Use **Context7** to understand the existing codebase
2. Use the **Research Agent** to gather information on implementation details
3. Use the **Figma Agent** to design new UI components or flows
4. Implement the code based on the research and designs
5. Use the **VRF MCP Server** for VRF-specific implementations
6. Use the **Code Review Agent** to check your code before committing

## Project-Specific Extensions

The MCP configurations include project-specific resources and tools tailored to the Solana Slots project:

- Slot machine symbols and animations
- VRF randomness verification tools
- Game rules and payout configurations
- Anchor program templates for VRF integration

## Troubleshooting

If you encounter issues with the MCP servers:

1. Ensure Node.js ≥ 18.19 is installed
2. Check that all dependencies are installed correctly
3. Run the setup script again to reinstall any missing components
4. Make sure the MCP server is running when trying to use its tools
5. Check the terminal for any error messages from the MCP server

## References

- [Context7 Documentation](https://github.com/upstash/context7)
- [Model Context Protocol Specification](https://example.com/mcp.schema.json)
- [Switchboard V3 VRF Documentation](https://docs.switchboard.xyz/vrf)
