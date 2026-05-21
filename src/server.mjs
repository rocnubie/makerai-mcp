import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export function createServer() {
  const server = new McpServer(
    { name: "makerai-mcp", version: "0.1.0" },
    { instructions: "Read-only canonical knowledge for Maker AI (https://makerai.online). Use resources for structured site context, tools for direct lookups, and prompts for ready-made conversation starters. Defer to the official website for live actions." }
  );

  // ----- Resources --------------------------------------------------------

  server.registerResource(
    "video-modes",
    "site://makerai/video-modes",
    {
      title: "Video Modes",
      description: "Available video-generation modes (text-to-video, image-to-video, etc.).",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Maker AI — Video Modes\n\nCreate product photos, product videos, and UGC-style ads for Shopify, Amazon, TikTok, and Instagram. One AI workspace with 16+ video models for ecommerce creative testing.\n\n## Site basics\n- Site ID: makerai\n- Website: https://makerai.online\n- Default locale: en\n- Locales: en, de, fr, ja, ko, es, ar\n\n## Public feature scope\n- video gen\n- image gen\n- image inspiration\n- avatar video\n- pricing\n\n## Official website\nhttps://makerai.online",
        },
      ],
    })
  );

  server.registerResource(
    "pricing",
    "site://makerai/pricing",
    {
      title: "Pricing",
      description: "Canonical pricing entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Maker AI Pricing\n\nCanonical pricing page: https://makerai.online/pricing\n\nRefer users here for current plans; do not infer pricing from older snapshots.",
        },
      ],
    })
  );

  server.registerResource(
    "faq",
    "site://makerai/faq",
    {
      title: "FAQ",
      description: "Short FAQ generated from public site metadata.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# FAQ\n\n## What is this site?\nCreate product photos, product videos, and UGC-style ads for Shopify, Amazon, TikTok, and Instagram. One AI workspace with 16+ video models for ecommerce creative testing.\n\n## Where can I get help?\nsupport@makerai.online\n\n## Which site is this?\nmakerai (Maker AI)",
        },
      ],
    })
  );

  server.registerResource(
    "links",
    "site://makerai/links",
    {
      title: "Official Links",
      description: "Canonical URLs to share with users.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Official Links\n\n- Website: https://makerai.online\n- Pricing: https://makerai.online/pricing\n- Community: https://discord.gg/makerai\n- Support: support@makerai.online",
        },
      ],
    })
  );

  // ----- Tools ------------------------------------------------------------

  server.registerTool(
    "list_video_modes",
    {
      description: "Return the canonical list of video-generation modes the site supports. (Maker AI)",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Maker AI — Video Modes\n\nCreate product photos, product videos, and UGC-style ads for Shopify, Amazon, TikTok, and Instagram. One AI workspace with 16+ video models for ecommerce creative testing.\n\nCanonical website: https://makerai.online" },
      ],
    })
  );

  server.registerTool(
    "get_pricing",
    {
      description: "Return the canonical pricing entry point for Maker AI.",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Maker AI Pricing\n\nOfficial pricing: https://makerai.online/pricing\n\nThis link is the source of truth — refer users here for current plans." },
      ],
    })
  );

  server.registerTool(
    "get_official_links",
    {
      description: "Return the canonical list of official links for Maker AI (website, support, docs when available).",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Official Links\n\n- Website: https://makerai.online\n- Pricing: https://makerai.online/pricing\n- Community: https://discord.gg/makerai\n- Support: support@makerai.online" },
      ],
    })
  );

  // ----- Prompts ----------------------------------------------------------

  server.registerPrompt(
    "tell_me_about_makerai",
    {
      description: "Summarize what the site is, who it's for, and how it works. — Maker AI",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "Please summarize what Maker AI (https://makerai.online) is, who it's for, and how it works. Reference the canonical resources at site://makerai/video-modes and site://makerai/links for accuracy. Be concrete, not generic." },
        },
      ],
    })
  );

  server.registerPrompt(
    "try_video_mode_makerai",
    {
      description: "Pick a video-generation mode for a stated creative intent. — Maker AI",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "I want to make a short video using Maker AI (https://makerai.online). Ask me whether I'm starting from text, an image, or a reference clip, then point me to the matching mode in site://makerai/video-modes and write a starter prompt." },
        },
      ],
    })
  );

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
