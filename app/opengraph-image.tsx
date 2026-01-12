import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
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
    console.error("Failed to fetch logo for OG image:", error);
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
            width="150"
            height="75"
            style={{ marginBottom: 40 }}
          />
        )}

        <div style={{ fontSize: 30, fontWeight: 700, color: "#34d399", marginBottom: logoSrc ? 20 : 40 }}>
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

