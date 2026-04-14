import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={hover ? { 
          y: -5,
          transition: { duration: 0.2 }
        } : {}}
        className={cn(
          'bg-gradient-to-b from-gray-900 to-black',
          'border border-gray-800 hover:border-blue-500/30',
          'rounded-xl overflow-hidden',
          'shadow-lg hover:shadow-xl hover:shadow-blue-500/10',
          'transition-all duration-300',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card