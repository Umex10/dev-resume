
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
    desc: "A clean interface that delivers weather insights with smooth interactions and a focus on clarity.",
    image: "/weather.jpg",
    tags: ["Vite", "React", "Tailwind", "Ts"],
    demo: "https://weather-beta-neon.vercel.app",
    github: "https://github.com/Umex10/weather.app",
  },
  {
    title: "Tic-Tac-Toe Game",
    desc: "A refined, fast-paced two-player game featuring nice visuals, fluid moves, and built-in score leaderboard.",
    image: "/tic-tac-toe.png",
    tags: ["JavaFX", "Sockets", "Threads", "Css"],
    github: "https://github.com/Umex10/TicTacToe",
  },
  {
    title: "Umexis",
    desc: "A minimal, item-focused shopping experience designed for quick browsing, clean layouts, and seamless user flow.",
    image: "/umexis.png",
    tags: ["Html5", "Tailwind", "Vanilla-Js"],
    demo: "https://umexis.vercel.app",
    github: "https://github.com/Umex10/Umexis",
  },
  {
    title: "Task Manager",
    desc: "A structured and distraction-free environment for organizing tasks, tracking progress, and keeping your workflow in order.",
    image: "/taskList-manager.png",
    tags: ["React", "Ts", "S-Boot", "Tailwind"],
    demo: "https://task-manager-umex10.vercel.app",
    github: "https://github.com/Umex10/task-manager",
  },
  {
    title: "Smart Kassa",
    desc: "A smart checkout solution for taxi companies, designed to streamline ride logging, bill calculation and daily workflow management through a clean and nice interface.",
    image: "/smart-kassa.png",
    tags: ["Backend - js", "Vite", "SQL"],
    demo: "https://smart-kassa.vercel.app",
    github: "https://github.com/zynqly-smartkassa/smart-kassa",
  },
];