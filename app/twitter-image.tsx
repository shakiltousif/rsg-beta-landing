import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function TwitterImage() {
  // Construct base URL more reliably
  const baseUrl = process.env.NEXT_PUBLIC_URL
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
    || "http://localhost:3000";

  let logoSrc: ArrayBuffer | null = null;

  try {
    // Fetch the logo with timeout and error handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const response = await fetch(`${baseUrl}/logo.png`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      logoSrc = await response.arrayBuffer();
    }
  } catch (error) {
    console.error("Failed to fetch logo for Twitter image:", error);
    // Continue without logo
  }

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
        {logoSrc && (
          // @ts-ignore - ImageResponse supports ArrayBuffer for src
          <img
            src={logoSrc as any}
            width="120"
            height="60"
            style={{ marginBottom: 30 }}
          />
        )}
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

