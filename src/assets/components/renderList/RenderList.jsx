import React, { useState } from 'react'

// props
export const RenderList = (props) => {
const [Nama, setNama] = useState(props.data.nama)
 const [Check, setCheck] = useState(props.data.check)
 const [OnEdit, setOnEdit] = useState(false)

 

  return (
    <div className={`space-x-2 ${ Check ? "line-through":""}`}>
    {/* ketika Konsdisi On Edit true maka inputan akan muncul & ketika false akan muncul */}
      { OnEdit ? <input value={Nama} onChange={(e)=>{setNama(e.target.value)}} className='border'/> :  <span>{Nama}</span> }
    
      <input checked={Check} type='checkbox' onChange={(e)=>{setCheck(!Check)}}/>

      <button onClick={()=>{setOnEdit(!OnEdit)}}> {OnEdit ? "Save": "Edit" }</button>
    </div>
  )
}
