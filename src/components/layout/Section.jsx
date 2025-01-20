import React from 'react'

const Section = ({
  children,
  className = '',
  id,
  fullHeight = false,
}) => {
  return (
    <section
      id={id}
      className={`
        ${fullHeight ? 'min-h-screen' : ''}
        py-16 md:py-24
        ${className}
      `}
    >
      {children}
    </section>
  )
}

export default Section
