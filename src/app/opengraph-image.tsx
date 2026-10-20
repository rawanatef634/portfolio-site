import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} · ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#ebe8e2",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, #faf9f6, transparent 55%)",
          color: "#0a0a0a",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#8a8a8a",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          {siteConfig.title}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 500 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "#4a4a4a",
              maxWidth: 880,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            SaaS products, dashboards, and business websites for founders and
            growing companies.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
