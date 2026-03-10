import { Github, Download, Send, Mail } from "lucide-react"

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
   download: {
      label: "Download CV",
      icon: Download,
      href: "/Umejr-Dzinovic-CV.pdf", 
      variant: "default",
    },
   contact: {
      label: "Contact Me",
      icon: Send,
      href: "mailto:umex10@gmail.com",
      variant: "outline",
    },
  },
}
