import React from 'react'

const variants = {
  primary:
    'bg-[var(--gold-primary)] text-[var(--text-on-gold)] hover:bg-[var(--gold-pale)]',
  outline:
    'border border-[var(--gold-primary)] text-[var(--gold-primary)] hover:bg-[var(--gold-primary)] hover:text-[var(--text-on-gold)]',
  ghost:
    'text-[var(--gold-primary)] border-none hover:text-[var(--gold-pale)] hover:underline',
}

const sizes = {
  default: 'py-3 px-6',
  sm: 'py-2 px-4',
}

export default function Button({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  ...rest
}) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center',
        'font-[Jost] font-normal text-[13px] uppercase tracking-[3px]',
        'rounded-[2px]',
        'transition-all duration-[250ms]',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  )
}
