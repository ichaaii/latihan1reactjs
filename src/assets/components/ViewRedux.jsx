import React from 'react'
import { useSelector } from 'react-redux'

export const ViewRedux = () => {
    const Data = useSelector((state) => state.KotakMakeUp)

  return (
    <div className='text-center text-white font-medium'>
        <h1>Jumlah Make up : {Data.jumlahmakeup}</h1>
        <h1>Nama Brand : {Data.namaBrand}</h1>
        <h1>Penerbit : {Data.penerbit}</h1>
        <h1>List bedak : {Data.listBedak.join(', ')}</h1>
        {/* <h1>List bedak : {Data.listBedak}</h1> */}
    </div>
  )
}
