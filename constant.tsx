import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";

export const MAX_FREE_REQUEST = 5;

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-300",
    bgColor: "bg-orange-300/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-emerald-300",
    bgColor: "bg-emerald-300/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-yellow-300",
    bgColor: "bg-yellow-300/10",
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    href: "/setting",
  },
];
