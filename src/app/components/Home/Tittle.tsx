import React from 'react'

const Tittle = ({tittle}:{tittle?:string}) => {
  return (
    <div>
      <div className='text-xl  text-[#2A254B] font-semibold'>
        {tittle}
      </div>
    </div>
  )
}

export default Tittle
