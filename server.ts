import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const META_PIXEL_ID = "24148531564830227";
const META_API_TOKEN = process.env.META_API_TOKEN;

app.post("/api/track", async (req, res) => {
  if (!META_API_TOKEN) {
    return res.status(500).json({ error: "META_API_TOKEN is not configured" });
  }

  const { eventName, eventUrl, userAgent, clientIp } = req.body;

  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            event_name: eventName || "PageView",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: eventUrl,
            user_data: {
              client_ip_address: clientIp || req.ip,
              client_user_agent: userAgent || req.headers["user-agent"],
            },
          },
        ],
        access_token: META_API_TOKEN,
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error sending event to Meta CAPI:", error);
    res.status(500).json({ error: "Failed to send event" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
