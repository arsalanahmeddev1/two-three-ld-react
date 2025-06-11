import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const baseClasses = ''

const variantClasses = {
  primary: 'bg-black py-[21px] px-[55px] font-poppins text-white',
  secondary: 'text-[20px] border border-[#707070] py-[11px] px-[47px] font-poppins text-black',
  white: 'text-black bg-white font-poppins px-[40px] py-[20px] text-[18px]',
  custom: '',
}

const sizeClasses = {
  sm: 'px-[50px] py-[5px]',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

const Button = ({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
}

export default Button
