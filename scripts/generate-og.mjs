// Standalone script to generate a static Open Graph image (og.png) into /public
// Run with: node scripts/generate-og.mjs
import React from "react";
import { ImageResponse } from "next/dist/compiled/@vercel/og/index.node.js";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const { createElement: h } = React;

const response = new ImageResponse(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#faf8f5",
        fontFamily: "sans-serif",
      },
    },
    h("div", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" } },
      h("div", { style: { width: "14px", height: "14px", borderRadius: "9999px", backgroundColor: "#1a6b5a" } }),
      h("div", { style: { fontSize: "18px", color: "#1a6b5a", letterSpacing: "0.2em", textTransform: "uppercase" } },
        "Computer Science & Engineering")
    ),
    h("div", { style: { fontSize: "88px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.02em", marginBottom: "24px", display: "flex" } },
      "MD RIYAD"),
    h("div", { style: { fontSize: "32px", color: "#555555", width: "820px", lineHeight: 1.4 } },
      "Computer Science • Machine Learning • Research"),
    h("div", { style: { display: "flex", alignItems: "center", gap: "12px", marginTop: "50px" } },
      h("div", { style: { width: "40px", height: "1px", backgroundColor: "#1a6b5a" } }),
      h("div", { style: { fontSize: "16px", color: "#888888" } },
        "Researching intelligent systems. Building thoughtful software."))
  ),
  { width: 1200, height: 630 }
);

const buffer = Buffer.from(await response.arrayBuffer());
const outPath = resolve(process.cwd(), "public", "og.png");
writeFileSync(outPath, buffer);
console.log(`OG image written to ${outPath} (${buffer.length} bytes)`);
