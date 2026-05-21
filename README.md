# Maker AI MCP Server

> Maker AI - AI Product Photo, Video & Ad Generator for Ecommerce

[![MCP Badge](https://lobehub.com/badge/mcp/rocnubie-makerai-mcp)](https://lobehub.com/mcp/rocnubie-makerai-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![smithery](https://smithery.ai/badge/makerai)](https://smithery.ai)
[![MCP](https://img.shields.io/badge/MCP-1.0-blue)](https://modelcontextprotocol.io)
[![Stdio Transport](https://img.shields.io/badge/transport-stdio-6e6e6e)](https://modelcontextprotocol.io/specification)
[![Read Only](https://img.shields.io/badge/server-read--only-2ea44f)](#tools)

<p align="center"><a href="https://makerai.online"><img src="./assets/hero.png" alt="Maker AI" width="720" /></a></p>

A Model Context Protocol server that exposes the canonical Maker AI knowledge surface — video generation workflows, pricing, FAQ, official links — to MCP-compatible AI clients such as Claude Desktop, Cursor, Windsurf, and Continue. Read-only, no API keys, no quota, ~50 ms cold start.

Official website: https://makerai.online

## 🎬 About Maker AI

Maker AI is an AI-powered creative studio built for ecommerce brands that need product content at scale. Users upload a product photo or paste a Shopify or Amazon store URL, and the platform generates studio-quality product images, short-form video ads, and UGC-style clips from that single input. Rather than coordinating photographers, video editors, and content creators separately, teams can produce all three content formats in one workflow. The platform draws on more than sixteen video generation models — including Sora, Kling, and Veo — selecting the appropriate model automatically based on the task. The result is a faster creative loop that lets brands test more variations without proportionally increasing production effort.

## Key Features

- **Multi-format output from one upload** — a single product photo or store URL produces studio photos, video ads, and UGC-style clips without separate workflows for each format.
- **16+ video model access** — the platform routes generation tasks to the most suitable model automatically, covering Sora, Kling, Veo Fast, and others without requiring manual model selection.
- **1,000+ AI avatar library** — UGC-style clips can feature realistic digital humans speaking in multiple languages including Spanish, French, German, Arabic, Russian, Korean, and Japanese, removing the need to hire or brief human creators.
- **Platform-optimized export** — content is formatted with native aspect ratios and pacing for TikTok, Instagram Reels, YouTube Shorts, Amazon listings, and Shopify product pages.
- **Proven ad hook templates** — a library of structured templates based on high-performing ad formats helps teams produce on-brand creative without starting from a blank slate.
- **Inspiration library** — ready-made examples demonstrate what finished outputs look like across different product categories and platforms, useful for briefing or for direct adaptation.

## Use Cases

- An Amazon seller needs fresh product listing images and short video clips for a seasonal campaign but lacks an in-house studio; they paste the product URL and export platform-ready assets the same day.
- A DTC brand running paid social wants to A/B test six ad hook variations for a new product launch without engaging an agency for each iteration.
- An ecommerce team expanding into French and Spanish markets generates localized UGC-style videos with AI avatars speaking each language rather than coordinating separate creator shoots.
- A Shopify store owner wants professional-looking background-swapped product photos to replace raw supplier images on their product pages.
- A growth team wants to refresh ad creative weekly to counter fatigue without increasing the content production budget.

## Who Is It For

Maker AI targets ecommerce operators who produce product content regularly and feel the friction of traditional production. The primary users are DTC brand owners, Amazon sellers, and in-house ecommerce growth teams at product-focused companies. It suits teams that run paid social campaigns, manage multiple product SKUs, or sell across several international markets — situations where the volume and variety of required content outpaces what a small team can produce through conventional means. Freelancers and small agencies managing multiple ecommerce clients will also find the multi-format workflow useful for keeping per-client production costs contained.

## Tools

### `list_video_modes`
Return the canonical list of video-generation modes the site supports. (Maker AI)

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_pricing`
Return the canonical pricing entry point for Maker AI.

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_official_links`
Return the canonical list of official links for Maker AI (website, support, docs when available).

_Input:_ no parameters. _Returns:_ text/markdown.

## Resources

- `site://makerai/video-modes` — Available video-generation modes (text-to-video, image-to-video, etc.).
- `site://makerai/pricing` — Canonical pricing entry point.
- `site://makerai/faq` — Short FAQ generated from public site metadata.
- `site://makerai/links` — Canonical URLs to share with users.

## Prompts

### `tell_me_about_makerai`
Summarize what the site is, who it's for, and how it works. — Maker AI

### `try_video_mode_makerai`
Pick a video-generation mode for a stated creative intent. — Maker AI

## Installation

### Install via Smithery

```bash
npx -y @smithery/cli install makerai-mcp --client claude
```

(Replace `claude` with `cursor`, `windsurf`, or `continue` for those clients.)

### Install from source

```bash
git clone https://github.com/rocnubie/makerai-mcp.git
cd makerai-mcp
pnpm install
```

Then add to your MCP client config (`claude_desktop_config.json` for Claude Desktop, `mcp.json` for Cursor / Windsurf / Continue):

```json
{
  "mcpServers": {
    "makerai-mcp": {
      "command": "node",
      "args": [
        "/absolute/path/to/makerai-mcp/src/index.mjs"
      ]
    }
  }
}
```

### Debug with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/index.mjs
```

## Official Links

- Website: https://makerai.online
- Pricing: https://makerai.online/pricing
- Community: https://discord.gg/makerai
- Support: support@makerai.online

## Development

```bash
pnpm install
pnpm start                 # run the server over stdio
```

## License

MIT
