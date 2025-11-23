import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "label";
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Typography = ({ variant = "body", children, className, as, ...props }: TypographyProps) => {
  const variants = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight",
    h2: "text-3xl md:text-4xl font-serif font-semibold tracking-tight",
    h3: "text-2xl md:text-3xl font-serif font-semibold",
    h4: "text-xl md:text-2xl font-serif font-medium",
    body: "text-base leading-relaxed",
    small: "text-sm text-muted-foreground",
    label: "text-sm font-medium",
  };

  const defaultTags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    body: "p",
    small: "span",
    label: "label",
  };

  const Component = (as || defaultTags[variant]) as any;

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
