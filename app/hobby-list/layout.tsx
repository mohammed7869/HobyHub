import React from 'react'

import { ReactNode } from 'react';
import PagesNavbar from '../navbar/pages-navbar';

const layout = ({children}: {children: ReactNode}) => {
  return (
    <>
    <PagesNavbar />
    <div>{children}</div>
    </>
  )
}

export default layout