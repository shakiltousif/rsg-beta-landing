import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  // Fetch the logo explicitly to ensure it's available for the generator
  // This avoids potential issues with internal network routing for the edge function
  const logoSrc = await fetch(new URL("/logo.png", baseUrl)).then((res) =>
    res.arrayBuffer()
  );

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
        {/* @ts-ignore - ImageResponse supports ArrayBuffer for src */}
        <img 
          src={logoSrc as any}
          width="150"
          height="75"
          style={{ marginBottom: 40 }}
        />
        
        <div style={{ fontSize: 30, fontWeight: 700, color: "#34d399", marginBottom: 20 }}>
          RideshareGuides.com
        </div>
        <div style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
          Keep 100% of Your Fares
        </div>
	        <div style={{ fontSize: 32, color: "#e2e8f0", lineHeight: 1.4, maxWidth: 900 }}>
	          Direct booking tools for TLC drivers • $15/week • 0% commission
	        </div>
      </div>
    ),
    size
  );
}

