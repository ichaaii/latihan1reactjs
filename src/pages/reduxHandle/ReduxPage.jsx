import React from 'react'
import {ViewRedux} from '../../assets/components/ViewRedux'
import {ButtonRedux} from '../../assets/components/ButtonRedux'

export const ReduxPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black'>
      <div className='rounded-xl border px-24 py-12 bg-gray-900 shadow-[20px_25px_10px_2px_#2D3748]'>
      <div className=' '>
      <ViewRedux/>
      <ButtonRedux/>
      </div>
      </div>
    </div>
  )
}
