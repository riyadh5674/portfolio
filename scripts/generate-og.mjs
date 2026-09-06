// Standalone script to generate static Open Graph image (og.png) and app icon
// (app-icon.png) into /public, matching the portfolio's dark design system.
// Run with: node scripts/generate-og.mjs
import React from "react";
import { ImageResponse } from "next/dist/compiled/@vercel/og/index.node.js";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const { createElement: h } = React;

const BG = "#0a0f14";
const TEXT = "#eaf2f8";
const SECONDARY = "#a7b6c4";
const MUTED = "#55626f";
const TEAL = "#2dd4bf";
const CYAN = "#38bdf8";
const VIOLET = "#a78bfa";

// ---- Open Graph image (1200x630) ----
const og = new ImageResponse(
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
        backgroundColor: BG,
        fontFamily: "sans-serif",
        position: "relative",
      },
    },
    h("div", {
      style: {
        position: "absolute",
        top: "-160px",
        right: "-160px",
        width: "520px",
        height: "520px",
        borderRadius: "9999px",
        background:
          "radial-gradient(circle, rgba(45,212,191,0.35) 0%, rgba(45,212,191,0) 70%)",
      },
    }),
    h("div", {
      style: {
        position: "absolute",
        bottom: "-200px",
        left: "-120px",
        width: "480px",
        height: "480px",
        borderRadius: "9999px",
        background:
          "radial-gradient(circle, rgba(167,139,250,0.28) 0%, rgba(167,139,250,0) 70%)",
      },
    }),
    h("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" } },
      h("div", { style: { width: "14px", height: "14px", borderRadius: "9999px", backgroundColor: TEAL } }),
      h("div", { style: { fontSize: "18px", color: TEAL, letterSpacing: "0.2em", textTransform: "uppercase" } },
        "Computer Science & Engineering")),
    h("div", { style: { position: "relative", fontSize: "88px", fontWeight: 700, color: TEXT, letterSpacing: "-0.02em", marginBottom: "24px", display: "flex" } },
      "MD RIYAD"),
    h("div", { style: { position: "relative", fontSize: "32px", color: SECONDARY, width: "820px", lineHeight: 1.4 } },
      "Machine Learning • Research • Engineering"),
    h("div", { style: { position: "relative", display: "flex", alignItems: "center", gap: "12px", marginTop: "50px" } },
      h("div", { style: { width: "40px", height: "1px", background: TEAL } }),
      h("div", { style: { fontSize: "16px", color: MUTED } },
        "Investigating intelligent systems. Building thoughtful software."))),
  { width: 1200, height: 630 }
);

// ---- App icon (192x192) ----
const icon = new ImageResponse(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${TEAL} 0%, ${CYAN} 55%, ${VIOLET} 100%)`,
        fontFamily: "sans-serif",
      },
    },
    h("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "64%",
        height: "64%",
        borderRadius: "24px",
        backgroundColor: "#04110d",
        fontSize: "72px",
        fontWeight: 800,
        color: TEXT,
        letterSpacing: "-0.02em",
      },
    }, "MR")),
  { width: 192, height: 192 }
);

const cwd = process.cwd();
const ogBuffer = Buffer.from(await og.arrayBuffer());
writeFileSync(resolve(cwd, "public", "og.png"), ogBuffer);
console.log(`OG image written to public/og.png (${ogBuffer.length} bytes)`);

const iconBuffer = Buffer.from(await icon.arrayBuffer());
writeFileSync(resolve(cwd, "public", "app-icon.png"), iconBuffer);
console.log(`App icon written to public/app-icon.png (${iconBuffer.length} bytes)`);