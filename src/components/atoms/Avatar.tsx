import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
}

const Avatar = ({ src, alt, size = "md", fallback, className, ...props }: AvatarProps) => {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  const initials = fallback || alt.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium overflow-hidden",
        sizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
