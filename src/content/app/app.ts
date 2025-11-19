
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
    title: "Weather App",
    desc: "A minimal weather tool that shows current conditions and a clean multi-day forecast for any city.",
    image: "/weather.jpg",
    tags: ["Vite", "React", "Tailwind", "TS"],
    demo: "https://weather-beta-neon.vercel.app",
    github: "https://github.com/Umex10/weather.app",
  },
  {
    title: "Tic-Tac-Toe Game",
    desc: "A nice JavaFX game for quick matches against an AI or another player on the same device.",
    image: "/tic-tac-toe.png",
    tags: ["JavaFX", "Multithreading", "Sockets", "CSS"],
    github: "https://github.com/Umex10/TicTacToe",
  },
  {
    title: "Task Manager",
    desc: "A small, minimal task app built to keep daily work structured and clutter-free.",
    image: "/taskList-manager.png",
    tags: ["Vite", "React", "Tailwind", "TS", "S-Boot"],
    demo: "https://task-manager-umex10.vercel.app",
    github: "https://github.com/Umex10/task-manager",
  },
  {
    title: "Umexis",
    desc: "A simple e-commerce display that loads products from an API and presents them in a clean layout.",
    image: "/umexis.png",
    tags: ["HTML5", "Tailwind", "Vanilla JS"],
    demo: "https://umexis.vercel.app",
    github: "https://github.com/Umex10/Umexis",
  },
  {
    title: "Smart Kassa",
    desc: "A student project creating a smart checkout system for taxi workflows, developed with a team of three.",
    image: "/smart-kassa.png",
    tags: ["Node.js Backend", "Vite", "SQL"],
    demo: "https://smart-kassa.vercel.app",
    github: "https://github.com/zynqly-smartkassa/smart-kassa",
  },
];
