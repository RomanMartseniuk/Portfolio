import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name}, ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 80,
          background: "#181818",
          color: "#F5F5F5",
        }}
      >
        <svg width="260" height="260" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="14" fill="#1F1F1F" />
          <path
            d="M21 50V14h13a9.5 9.5 0 0 1 0 19H21M33 33l8 17"
            fill="none"
            stroke="#F5F5F5"
            strokeWidth="8"
          />
          <circle cx="52" cy="46" r="4.5" fill="#FF5A5A" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 40, color: "#FF5A5A" }}>
            Full stack developer
          </div>
          <div style={{ fontSize: 30, color: "#9B9B9B" }}>
            React, TypeScript, Node.js, NestJS
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
