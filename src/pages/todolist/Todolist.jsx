import React, { useEffect, useState } from 'react'
import { RenderList } from "../../assets/components/renderList/RenderList";

export const Todolist = () => {
    // const [namaku, setNamaku] = useState("Paijo");

const [InputValue, setInputValue] = useState ("")
    const [DataValue, setDataValue] = useState(
        [
            {
                text: "pak paijo",
                check: false
            },
            {
                text: "pak saijo",
                check: false
            },
            {
                text: "pak kaijo",
                check: false
            }
        ]
    )

    useEffect(() => {
        console.log(DataValue , "DataValue")
    }, [DataValue])

    let data = [
        {
            nama: "pak paijo",
            check: false
        },
        {
            nama: "pak Paimen",
            check: true
        },
        {
            nama: "bagas Salto",
            check: false
        }
    ]
    
    //function untuk render list
    const renderList =()=>{

        return data.map((value)=>{
            return <RenderList data={value}/>
        })
    }

  
  return (
    // <div className='flex justify-center items-center h-screen flex-col space-y-2'>
    //     {/* <input onChange={(e)=>{setInputValue(e.target)}} */}
    // </div>

<div className='flex justify-center  items-center h-screen flex-col space-y-2'>
{renderList()}
</div>
  )
}
