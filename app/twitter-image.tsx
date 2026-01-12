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
          alignItems: "center",
          padding: 60,
	          color: "#ffffff",
	          backgroundColor: "#020617",
            backgroundImage: "radial-gradient(circle at 50% 0%, #1e293b 0%, #020617 75%)",
            textAlign: "center",
        }}
      >
        <img 
          src="https://rsg-beta.vercel.app/logo.png"
          width="120"
          height="60"
          style={{ marginBottom: 30 }}
        />
        <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
          Keep 100% of Your Fares
        </div>
        <div style={{ fontSize: 32, color: "rgba(226,232,240,0.92)", marginBottom: 10 }}>
          RideshareGuides.com — NYC TLC drivers
        </div>
        <div style={{ fontSize: 26, color: "rgba(148,163,184,0.92)" }}>
          $15/week • $0 commission • Direct bookings
        </div>
      </div>
    ),
    size
  );
}

