import React from 'react'

const Button = ({
  type = 'button',
  label,
  color = 'primary',
  variant = 'contained',
  url,
  handleClick,
  title,
  disabled,
  children,
}) => {
  const rootClasses = `Button is-${color} is-${variant}`

  return url ? (
    <a
      href={url}
      className={rootClasses}
      title={title}
    >
      { label || children }
    </a>
  ) : (
    <button
      type={type}
      className={rootClasses}
      onClick={handleClick}
      role="button"
      disabled={disabled}
    >
      { label || children }
    </button>
  )
}

export default Button
