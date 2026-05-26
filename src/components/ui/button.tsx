import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 text-xs tracking-extra-wide uppercase font-sans font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-40 whitespace-nowrap',
  {
    variants: {
      variant: {
        default:  'bg-accent text-white hover:bg-accent-hover',
        outline:  'border border-border text-foreground hover:border-foreground/40',
        ghost:    'text-foreground-muted hover:text-foreground hover:bg-surface',
        surface:  'bg-surface text-foreground border border-border hover:border-foreground/30',
        white:    'bg-foreground text-background hover:bg-foreground/90',
      },
      size: {
        sm: 'px-5 py-3 text-[10px]',
        md: 'px-7 py-4',
        lg: 'px-9 py-5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size:    'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
