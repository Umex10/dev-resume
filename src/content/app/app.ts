
interface App {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  demo?: string;
  github?: string;
}


export const apps: App[] = [
  {
    title: "� Chatex — Social Website",
    desc: "A social website with a stateless JWT auth system — CSRF disabled, CORS locked to the frontend. Access tokens (15 min) paired with HttpOnly refresh tokens (30 days).",
    image: "/chatex.png",
    tags: ["S-Boot", "S-Boot-Security", "Next.js", "RTK Queries", "JWT"],
    demo: "https://chatex-five.vercel.app",
    github: "https://github.com/Umex10/chatex",
  },
  {
    title: "📝 Renderex — AI-Driven Note-Taking",
    desc: "Modern note-taking where markdown meets AI. Firebase handles the entire backend — auth, database, protected routes, user-scoped data — all without running a server. Google Gemini is wired in for context-aware content generation. Export to PDF, DOCX, Markdown or plain text, full tag system, dark/light theme with Framer Motion animations.",
    image: "/renderex.png",
    tags: ["Next.js", "TS", "Firebase", "Redux", "Gemini AI", "Framer Motion", "Tailwind"],
    github: "https://github.com/Umex10/renderex",
  },
  {
    title: "🧠 LeetCode & DSA Exercises",
    desc: "A website where I document my solved LeetCode issues in detail. Each solution is written in Java and includes a thorough vision of the code as well as time and memory analysis.",
    image: "/leetcode.png",
    tags: ["Java", "DSA", "Algorithms", "Next.js"],
    demo: "https://dsa-exercises-website.vercel.app",
    github: "https://github.com/Umex10/dsa-exercises-website",
  },
  {
    title: "🚕 Smart Kassa",
    desc: "A team-driven website building a smart checkout system for taxi workflows. I built the Leaflet-based location tracking, the ride summary system, and handled most of the UI design.",
    image: "/smart-kassa.png",
    tags: ["Node.js Backend", "Vite", "SQL", "Scrum"],
    demo: "https://smart-kassa.vercel.app",
    github: "https://github.com/zynqly-smartkassa/smart-kassa",
  },
  {
    title: "🌤️ Weather App",
    desc: "A minimal weather tool that shows current conditions and a clean multi-day forecast for any city.",
    image: "/weather.jpg",
    tags: ["Vite", "React", "Tailwind", "TS"],
    demo: "https://weather-beta-neon.vercel.app",
    github: "https://github.com/Umex10/weather.app",
  },
  {
    title: "🎮 Tic-Tac-Toe Game",
    desc: "A nice JavaFX game for quick matches against an AI or another player on the same device.",
    image: "/tic-tac-toe.png",
    tags: ["JavaFX", "Multithreading", "Sockets", "CSS"],
    github: "https://github.com/Umex10/TicTacToe",
  },
  {
    title: "✅ Task Manager",
    desc: "A small, minimal task app built to keep daily work structured and clutter-free.",
    image: "/taskList-manager.png",
    tags: ["Vite", "React", "Tailwind", "TS", "S-Boot"],
    demo: "https://task-manager-umex10.vercel.app",
    github: "https://github.com/Umex10/task-manager",
  },
  {
    title: "🛍️ Umexis",
    desc: "A simple e-commerce display that loads products from an API and presents them in a clean layout.",
    image: "/umexis.png",
    tags: ["HTML5", "Tailwind", "Vanilla JS"],
    demo: "https://umexis.vercel.app",
    github: "https://github.com/Umex10/Umexis",
  },
];
