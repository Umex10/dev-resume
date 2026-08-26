import { Github, Send, Mail } from "lucide-react"

export const heroCard = {
  image: {
    src: "/image.jpg",
    alt: "Umejr Dzinovic",
  },
  about: {
    name: "Umejr Dzinovic",
    role: "Mobile Software Developer",
    status: {
      available: true,
      text: "Available for work",
      color: "green", 
    },
  },
  socials: [
    {
      name: "Gmail",
      href: "mailto:umi.dzinovic10@gmail.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      href: "https://github.com/umex10",
      icon: Github,
    },
  ],
  actions: {
   contact: {
      label: "Contact Me",
      icon: Send,
      href: "mailto:umi.dzinovic10@gmail.com",
      variant: "default",
    },
  },
}
