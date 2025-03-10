import React from 'react'
import HomeNavbar from '../navbar/homenavbar'

import { ReactNode } from 'react';

const layout = ({children}: {children: ReactNode}) => {
  return (
    <>
    <HomeNavbar />
    <div>{children}</div>
    </>
  )
}

export default layout