import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  withIcon?: boolean
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'left', 
  className,
  withIcon = false 
}: SectionTitleProps) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  // Split title to highlight last word
  const words = title.split(' ')
  const lastWord = words.pop()
  const firstPart = words.join(' ')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn('mb-12', alignments[align], className)}
    >
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="inline-block mb-3"
        >
          <span className="bg-blue-600/10 text-blue-500 text-xs font-medium tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-blue-500/20 inline-flex items-center gap-1.5">
            {withIcon && <Sparkles size={12} />}
            {subtitle}
          </span>
        </motion.div>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {firstPart}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          {lastWord}
        </span>
      </h2>
    </motion.div>
  )
}

export default SectionTitle