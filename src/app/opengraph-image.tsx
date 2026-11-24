import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link-preview card shown when pinsara.com is shared (LinkedIn, X, Slack, WhatsApp…). */
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/profile-photo.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "radial-gradient(900px at 20% 30%, rgba(45,212,191,0.14), #0b1120 70%)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={280}
          height={280}
          style={{ borderRadius: 9999, border: "6px solid rgba(94,234,212,0.35)", background: "#1e293b", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#f1f5f9", letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 40, color: "#5eead4", marginTop: 12 }}>{profile.title}</div>
          <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 28, maxWidth: 640, lineHeight: 1.4 }}>
            {profile.subtitle}
          </div>
          <div style={{ fontSize: 26, color: "#64748b", marginTop: 36 }}>pinsara.com</div>
        </div>
      </div>
    ),
    size,
  );
}
