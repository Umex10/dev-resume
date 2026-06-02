const GITHUB_STREAK_START_DATE = new Date("2025-12-16T00:00:00Z");
const MS_PER_DAY = 1000 * 60 * 60 * 24;

const getDaysSinceGitHubStreakStart = () => {
  const now = new Date();
  const diffMs = now.getTime() - GITHUB_STREAK_START_DATE.getTime();
  return Math.max(0, Math.floor(diffMs / MS_PER_DAY));
};

const getGitHubStreakMonthText = () => {
  const days = getDaysSinceGitHubStreakStart();
  if (days < 30) return "(less than a month)";
  const months = Math.floor(days / 30);
  return `(almost ${months + 1} months)`;
};

export const textContent = {
  intro: {
    greetingEmoji: "👋",
    greetingText: "Hello World!",
  },

  identity: {
    start: "I'm",
    name: "Umejr Dzinovic",
    location: "Based in Eggenberg, AT.",
  },

   desc: {
    firstText: "I am an IT student currently in my",
    firstTech: "4th semester",

    secondText: "and I am actively looking for a role as a",
    secondTech: "Software Engineer",

    thirdText: "to gain hands-on know-how alongside my studies. My high motivation is shown by my",
    thirdTech: () => `${getDaysSinceGitHubStreakStart()}-day GitHub streak`,

    forthText: () => `${getGitHubStreakMonthText()} and an ongoing 13-day LeetCode streak, showing my drive to code and motivation every day.`,
  },

   metrics: [
    { value: 7, label: "Finished Apps", plus: true },
    { value: 20, label: "Months in Coding", plus: true },
    { value: 1227, label: "Git Contributions", plus: true },
    { value: 1.17, label: "Current GPA", plus: false },
  ],
};
