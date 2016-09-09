
import React from 'react'
import paths from './paths'

const Icon = ({
  name = 'twitter',
  size = 16,
  fill = 'currentcolor',
  ...props
}) => {
  const d = paths[name] || ''

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      width={size}
      height={size}
      fill={fill}
      fillRule='evenodd'
      clipRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='1.414'
      {...props}>
      <path
        fillRule='nonzero'
        d={d} />
    </svg>
  )
}

export default Icon

