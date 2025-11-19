import { VscCallIncoming } from "react-icons/vsc";
import { Mail } from 'lucide-react';
import { LocateFixed } from 'lucide-react';



export const contactInfo = [
    {
      icon: VscCallIncoming,
      label: "Contact No",
      value: "+43 555 6331222",
      type: "phone"
    },
    {
      icon: Mail,
      label: "Email",
      value: "umi.dzinovic10@gmail.com",
      type: "email"
    },
    {
      icon: LocateFixed,
      label: "Location",
      value: "Graz, 8020",
      type: "address"
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