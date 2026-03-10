import { Mail } from 'lucide-react';
import { LocateFixed } from 'lucide-react';

export const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "umi.dzinovic10@gmail.com",
      type: "email"
    },
    {
      icon: LocateFixed,
      label: "Location",
      value: "Werk-VI-Straße 46, 8605 Kapfenberg",
      type: "address"
    },
  ];

export const contactForm = {
  input: {
  name: "Full Name",
  email: "Email",
  message: "Message"
  },
  button: {
    value: "Send Message"
  }
}