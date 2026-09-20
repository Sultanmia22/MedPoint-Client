import React, { type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  className?: string
}

const Container = ({ 
  children, 
  size = 'xl',
  padding = 'md',
  className = ''
}: ContainerProps) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full'
  }

  const paddings = {
    none: 'px-0',
    sm: 'px-3 sm:px-4 md:px-6',
    md: 'px-4 sm:px-6 md:px-8 lg:px-10',
    lg: 'px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16'
  }

  return (
    <div className={`mx-auto w-full ${sizes[size]} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  )
}

export default Container