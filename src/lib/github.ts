const GITHUB_USERNAME = "Umex10";
const GITHUB_API = "https://api.github.com";

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  pushed_at: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
  featuredRepos: GitHubRepo[];
  profileUrl: string;
  memberSince: string;
}

export const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Java: "#ED8B00",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Python: "#3776AB",
  Shell: "#89E051",
};

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github.v3+json" },
      }),
      fetch(
        `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
        {
          next: { revalidate: 3600 },
          headers: { Accept: "application/vnd.github.v3+json" },
        }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return FALLBACK;

    const user = await userRes.json();
    const allRepos: GitHubRepo[] = await reposRes.json();
    const ownRepos = allRepos.filter((r) => !r.fork);
    const totalStars = ownRepos.reduce(
      (sum, r) => sum + r.stargazers_count,
      0
    );

    const langCount: Record<string, number> = {};
    for (const repo of ownRepos) {
      if (repo.language) {
        langCount[repo.language] = (langCount[repo.language] || 0) + 1;
      }
    }

    const topLanguages = Object.entries(langCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    const featuredRepos = ownRepos
      .filter((r) => r.name !== GITHUB_USERNAME)
      .slice(0, 4);

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars,
      topLanguages,
      featuredRepos,
      profileUrl: `https://github.com/${GITHUB_USERNAME}`,
      memberSince: user.created_at,
    };
  } catch {
    return FALLBACK;
  }
}

const FALLBACK: GitHubStats = {
  publicRepos: 15,
  followers: 7,
  totalStars: 2,
  topLanguages: [
    { name: "TypeScript", count: 7 },
    { name: "Java", count: 3 },
    { name: "JavaScript", count: 1 },
    { name: "HTML", count: 1 },
  ],
  featuredRepos: [],
  profileUrl: "https://github.com/Umex10",
  memberSince: "2024-12-20T20:07:21Z",
};
