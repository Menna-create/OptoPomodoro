import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

const Icon = ({ icon: LucideIconComponent, className, size = 20 }: IconProps) => {
  return <LucideIconComponent className={cn("", className)} size={size} />;
};

export default Icon;
