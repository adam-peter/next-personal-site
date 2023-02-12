"use client"

import React from 'react'

import styles from "./button.module.css"

type ButtonType = {
  variant: string;
}

const Button: React.FC<ButtonType> = ({variant}) => {
  return (
    <div className={styles.button}>
      {variant}
    </div>
  )
}

export default Button
