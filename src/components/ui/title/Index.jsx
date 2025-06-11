import React from 'react'
import clsx from 'clsx';
const Index = ({ title, className, Tag = 'h2', size = 'text-[55px]'}) => {
  return <Tag className={clsx(`${size} font-bold text-center text-black`, className)}>{title}</Tag>
}

export default Index
