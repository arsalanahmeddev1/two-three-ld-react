import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Input = forwardRef(({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  variant = 'default',
  icon: Icon,
  className,
  iconClassName,
  parentClass,
  ...rest
}, ref) => {
  const baseClasses = 'w-full'
  const variantClasses = {
    default: 'border border-[#707070] bg-white py-[29px] px-[22px]',
    headerSearch: 'border border-[#AEAEAE]  py-[12px] px-[20px]',
    search: 'bg-gray-100 border-gray-200',
    bgWhite: 'bg-white text-[16px] px-[16px] py-[20px]'
  }
  
  return (
    <div className={clsx(`flex items-center relative ${parentClass}`, {
      'space-x-2': Icon,
    })}>
      {Icon && <Icon className={clsx(`text-gray-500 absolute ${iconClassName}`)} />}
      <input
        id={id}
        name={name}
        type={type}
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          baseClasses,
          variantClasses[variant],
          className
        )}
        {...rest}
      />
    </div>
  )
})

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'noBg', 'search']),
  icon: PropTypes.elementType,
  className: PropTypes.string,
}

export default Input
