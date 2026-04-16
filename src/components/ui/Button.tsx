import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white font-medium',
      secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium',
      outline: 'border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl',
      lg: 'px-8 py-4 text-lg rounded-xl',
    }
    const {
      // Conflicting drag events
      onDrag,
      onDragStart,
      onDragEnd,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDragExit,
      // Conflicting animation events
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      onTransitionEnd,      // Also conflicts with Framer Motion's transition callbacks
      // Any other native synthetic events that Framer Motion overrides
      onLoad,
      onError,
      ...restProps
    } = props;
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={cn(/* ... */)}
        ref={ref}
        {...restProps}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button