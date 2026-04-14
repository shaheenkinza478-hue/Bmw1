import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div className={cn('container-padding mx-auto max-w-7xl', className)} {...props}>
      {children}
    </div>
  )
}

export default Container