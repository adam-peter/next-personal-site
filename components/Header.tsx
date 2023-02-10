"use client"
import React from 'react'

import HeaderLink from './HeaderLink'

import delay from '@/lib/delay'

const Header = async () => {
  await delay(5000)
  return (
    <header>
      Header component
      <HeaderLink />
    </header>
  )
}

export default Header