import { MonitorDown } from "lucide-react";
import { Mail } from 'lucide-react';
import { LocateFixed } from 'lucide-react';



export const contactInfo = [
    {
      icon: MonitorDown,
      label: "Contact No",
      value: "+43 555 6331222",
    },
    {
      icon: Mail,
      label: "Email",
      value: "umi.dzinovic10@gmail.com",
    },
    {
      icon: LocateFixed,
      label: "Address",
      value: "Algersdorfer Straße 53, 8020",
    },
  ];

export const contactForm = {
  input: {
  name: "Full Name",
  email: "Email",
  number: "Number",
  message: "Message"
  },
  button: {
    value: "Send Message"
  }
}