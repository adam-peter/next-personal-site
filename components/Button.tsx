import React from 'react'

type ButtonType = {
  variant: string;
}

const Button: React.FC<ButtonType> = ({variant}) => {
  return (
    <div>
      {variant}
    </div>
  )
}

export default Button
