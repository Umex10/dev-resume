import { getGitHubStats } from "@/lib/github";
import GitHubContent from "./GitHubContent";

export default async function GitHubSection() {
  const stats = await getGitHubStats();
  return <GitHubContent stats={stats} />;
}
