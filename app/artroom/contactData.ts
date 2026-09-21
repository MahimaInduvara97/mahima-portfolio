import type { LucideIcon } from "lucide-react";
import { Camera, Code2, Mail, MessageCircle, Phone, Users } from "lucide-react";

export type ContactItem = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

// Keep display copy and destinations separate so either can be changed safely.
export const contactItems: ContactItem[] = [
  { id: "phone", label: "Call my number", value: "075 620 4045", href: "tel:+94756204045", icon: Phone },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Chat with me",
    href: "https://wa.me/94756204045?text=Hi%20Mahima%2C%20I%20came%20across%20your%20portfolio.",
    icon: MessageCircle,
    external: true,
  },
  { id: "email", label: "Email", value: "mahima.levein@gmail.com", href: "mailto:mahima.levein@gmail.com", icon: Mail },
  { id: "github", label: "GitHub", value: "@mahima-induvara", href: "https://github.com/mahima-induvara", icon: Code2, external: true },
  { id: "instagram", label: "Instagram", value: "@induuvaa", href: "https://www.instagram.com/induuvaa/", icon: Camera, external: true },
  { id: "facebook", label: "Facebook", value: "Mahima Induvara", href: "https://www.facebook.com/mahima.induvara", icon: Users, external: true },
];
