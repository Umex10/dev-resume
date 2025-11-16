import TypescriptIcon from "/public/typescript.svg";
import ReactIcon from "/public/react.svg";
import JavaIcon from "/public/java.svg";
import TailwindIcon from "/public/tailwindcss.svg";
import SpringIcon from "/public/spring.svg";
import NextJsIcon from "/public/nextdotjs.svg";
import DockerIcon from "/public/docker.svg";

export const skills = [
  { type: "java", icon: JavaIcon, level: 70, category: "backend"},
  { type: "s-Boot", icon: SpringIcon, level: 35, category: "backend" },
  { type: "typescript", icon: TypescriptIcon, level: 50, category: "frontend" },
  { type: "tailwind", icon: TailwindIcon, level: 75, category: "frontend" },
  { type: "react", icon: ReactIcon, level: 45, category: "frontend" },
  { type: "nextJS", icon: NextJsIcon, level: 30, category: "frontend" },
  { type: "docker", icon: DockerIcon, level: 25, category: "devOps" },
];

const categoryMap = Object.fromEntries(
  skills.map((skill) => [skill.type.toLowerCase(), skill.category.toLowerCase()])
);

// To calculate what the amount of each section is, f.e: backend: 3
const countCategories = (): Record<string, number> => {
  return skills.reduce((acc, skill) => {
    const cat = skill.category.toLowerCase();
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>)
}

// To calculate the % of each section
export const calculateAmounts = () => {
  const total = Object.values(countCategories()).reduce((sum, x) => sum + x, 0);

  return Object.fromEntries(
    Object.entries(countCategories()).map(([category, count]) => [
      category,
      Math.round((count / total) * 100)
    ])
  );


}
// To calculate how good I am in a specific field considering the 
// mentioned technologies. f.e: tailwind, ts -> frontend
const summarizeCategoryLevels = (): Record<string, number> =>  {
  return skills.reduce(
    (acc, skill) => {
      const cat = skill.category.toLowerCase();
      acc[cat] = (acc[cat] || 0) + skill.level;
      return acc;
    },
    {} as Record<string, number>
  );
}

export const calculateSkillLevel = () => {

  const countedCategories = countCategories();

  return Object.fromEntries(
    Object.entries(summarizeCategoryLevels()).map(([category, summarizedValue]) => [
        category,
        summarizedValue / countedCategories[category]
    ])
  );
}


// returns a color scheme for the chart
export const handleColor = (type: string): SkillColor => {
   const category = categoryMap[type.toLowerCase()];

  switch (category) {
    case "frontend":
      return violet;

    case "backend":
      return green;

    case "devops":
      return gray;

    default:
      return green;
  }
}

type SkillColor = {
  bar: string;
  title: {
    text: string;
    background: string;
  },
  hover: boolean,
  background: string

};

const green: SkillColor = {
  bar: "#22c55e",
  title: {
    text: "#ffffff",
    background: "#064e3b",
  },
  hover: true,
  background: "#064e3b",
};

const violet: SkillColor = {
  bar: "#8b5cf6",
  title: {
    text: "#ffffff",
    background: "#4c1d95",
  },
  hover: true,
  background: "#4c1d95",
};

const gray: SkillColor = {
  bar: "#9ca3af",
  title: {
    text: "#ffffff",
    background: "#1f2937",
  },
  hover: true,
  background: "#1f2937",
};