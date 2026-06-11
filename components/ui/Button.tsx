import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'hero'
    | 'heroOutline'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'accent';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  asChild?: boolean;
  href?: string;
}

const buttonVariants = {
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  variants: {
    default:
      'bg-foreground text-background hover:bg-accent',
    hero: 'bg-foreground text-background hover:bg-accent',
    heroOutline:
      'border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background',
    outline:
      'border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary/70',
    ghost: 'hover:bg-secondary hover:text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
  },
  sizes: {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-12 px-8 text-base',
    xl: 'h-14 px-9 text-base',
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      buttonVariants.base,
      buttonVariants.variants[variant],
      buttonVariants.sizes[size],
      className
    );

    if (asChild && href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    if (href && !asChild) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
