import { ImageResponse } from "next/og";

export const runtime = "edge";
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
          justifyContent: "center",
          padding: 72,
          color: "#ffffff",
          backgroundColor: "#020617",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 700, color: "#34d399" }}>
          RideshareGuides.com
        </div>
        <div style={{ marginTop: 18, fontSize: 78, fontWeight: 900, lineHeight: 1.05 }}>
          Keep 100% of Your Fares
        </div>
	        <div style={{ marginTop: 18, fontSize: 30, color: "#e2e8f0", lineHeight: 1.25 }}>
	          Direct booking tools for NYC TLC drivers - $15/week - 0% commission
	        </div>
      </div>
    ),
    size
  );
}

