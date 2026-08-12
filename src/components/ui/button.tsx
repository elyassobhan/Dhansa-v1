import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white rounded-xl hover:bg-primary/90 shadow-sm",
        outline: "border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white",
        ghost: "text-foreground hover:bg-accent rounded-xl",
        secondary: "bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80",
        destructive: "bg-destructive text-white rounded-xl hover:bg-destructive/90",
        hero: "bg-primary text-white rounded-full hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        glass: "bg-white/15 text-white border border-white/30 rounded-full hover:bg-white/25 backdrop-blur",
        glassOutline: "bg-transparent text-white border border-white/40 rounded-full hover:bg-white/10",
        ink: "bg-foreground text-background rounded-full hover:bg-foreground/90",
        soft: "bg-accent text-accent-foreground rounded-full hover:bg-accent/80",
        link: "text-primary underline-offset-4 hover:underline",
        whatsapp: "bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] shadow-md hover:shadow-lg hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-5 py-2 text-sm",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
        pill: "h-11 px-6 text-sm",
        pillLg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
