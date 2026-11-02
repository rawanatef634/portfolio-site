export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") {
    return;
  }

  const token = process.env.HERONSIGNAL_SERVER_TOKEN;
  if (!token) {
    return;
  }

  const { init } = await import("@heronsignal/node");

  init({
    token,
    service: "portfolio-site",
    flushIntervalMs: process.env.VERCEL ? 0 : 2000,
  });
}
