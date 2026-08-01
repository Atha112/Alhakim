import React from 'react'

export default function GoldDivider({ className = '', align = 'center' }) {
  const alignClass = align === 'left' ? '!ml-0' : align === 'right' ? '!mr-0' : 'mx-auto'

  return (
    <div
      className={[
        'w-[60px] h-px',
        'bg-[var(--gold-primary)] opacity-60',
        alignClass,
        className,
      ].join(' ')}
    />
  )
}
