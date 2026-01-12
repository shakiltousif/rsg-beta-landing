import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
	          color: "#ffffff",
	          backgroundColor: "#020617",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05 }}>
          Keep 100% of Your Fares
        </div>
        <div style={{ marginTop: 16, fontSize: 28, color: "rgba(226,232,240,0.92)" }}>
          RideshareGuides.com — NYC TLC drivers
        </div>
        <div style={{ marginTop: 34, fontSize: 22, color: "rgba(148,163,184,0.92)" }}>
          $15/week • $0 commission • Direct bookings
        </div>
      </div>
    ),
    size
  );
}

