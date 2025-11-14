import { Github, Linkedin, Youtube, Instagram, Twitter, Download, Send } from "lucide-react"

// 🧠 Hauptobjekt: CardContent
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
      name: "Instagram",
      href: "https://instagram.com/umex10",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/umex10",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@umex10",
      icon: Youtube,
    },
    {
      name: "GitHub",
      href: "https://github.com/umex10",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/umex10",
      icon: Linkedin,
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
