"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Github,
  BookMarked,
  Star,
  Users,
  ExternalLink,
  GitFork,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import type { GitHubStats } from "@/lib/github";
import { LANG_COLORS } from "@/lib/github";

const techStack = [
  "TS",
  "Java",
  "React",
  "Next.js",
  "Tailwind CSS",
  "S-Boot",
  "Node.js",
  "Docker",
  "Vite",
  "SQL",
];

export default function GitHubContent({ stats }: { stats: GitHubStats }) {
  const statCards = [
    { value: stats.publicRepos, label: "Public Reps", icon: BookMarked },
    { value: stats.totalStars, label: "Stars Earned", icon: Star },
    { value: stats.followers, label: "Followers", icon: Users },
    { value: stats.topLanguages.length, label: "Languages", icon: Code2 },
  ];

  const memberYear = new Date(stats.memberSince).getFullYear();

  return (
    <section
      id="github"
      className="md:min-h-[calc(100vh-4.563rem)] w-full py-12 flex flex-col gap-10"
    >
      <SectionHeading icon={Github} heading="GitHub" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/15 via-green-500/10 to-emerald-500/15" />
              <CardContent className="flex flex-col items-center gap-2 py-6 relative z-10">
                <stat.icon className="w-6 h-6 text-green-500" />
                <span className="text-3xl font-extrabold tracking-tight">
                  <CountUp start={0} end={stat.value} duration={5} />
                </span>
                <span className="text-sm text-muted-foreground text-center">
                  {stat.label}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        <h3 className="text-xl font-semibold tracking-tight">Tech Stack</h3>
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                bg-muted text-sm font-medium border border-border
                hover:border-green-500/50 transition-colors duration-300 cursor-default"
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-green-500"
              />
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Recent Projects */}
      {stats.featuredRepos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-xl font-semibold tracking-tight">
            Recent Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.featuredRepos.map((rep, index) => (
              <motion.div
                key={rep.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="group relative overflow-hidden cursor-pointer
                    hover:shadow-lg transition-all duration-300 hover:scale-[1.01] h-full"
                  onClick={() => window.open(rep.html_url)}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/15 via-green-500/10 to-emerald-500/15" />
                  <CardHeader className="pb-2 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookMarked className="w-4 h-4 text-green-500" />
                        <span className="font-semibold">{rep.name}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    {rep.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {rep.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      {rep.language && (
                        <span className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full bg-green-500"
                          />
                          {rep.language}
                        </span>
                      )}
                      {rep.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {rep.stargazers_count}
                        </span>
                      )}
                      {rep.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {rep.forks_count}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Member Since + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3"
      >
        <p className="text-sm text-muted-foreground">
          Member since {memberYear}
        </p>
        <a href={stats.profileUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-5 h-5" />
            View Full Profile
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
