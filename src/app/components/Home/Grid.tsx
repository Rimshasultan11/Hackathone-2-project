import React, { ReactNode } from 'react'

const Grid = ({children}:{children:ReactNode}) => {
  return (
    <div className='wraper grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 my-[50px]  gap-5'>
      {children}
    </div>
  )
}

export default Grid
