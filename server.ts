import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Mock data for reports
  let reports = [
    {
      id: "1",
      title: "Overflowing Bin - 5th Ave",
      category: "Garbage",
      status: "pending",
      priority: "high",
      location: "Downtown Central",
      reportedBy: "Citizen #829",
      time: "14 mins ago",
      image: "https://picsum.photos/seed/garbage1/400/300"
    },
    {
      id: "2",
      title: "Illegal Dumping - Park Entrance",
      category: "Sanitation",
      status: "in-progress",
      priority: "critical",
      location: "Westside Greens",
      reportedBy: "Mobile Patrol",
      time: "32 mins ago",
      image: "https://picsum.photos/seed/dumping1/400/300",
      worker: "David K."
    }
  ];

  app.get("/api/reports", (req, res) => {
    res.json(reports);
  });

  app.post("/api/reports", (req, res) => {
    const newReport = {
      id: Math.random().toString(36).substr(2, 9),
      ...req.body,
      status: "pending",
      time: "Just now"
    };
    reports.unshift(newReport);
    res.status(201).json(newReport);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
