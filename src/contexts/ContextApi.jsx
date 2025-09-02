import React, { createContext, useState } from 'react'

export const addResponseContext=createContext()

function ContextApi({children}) {
    const [addResponse,setAddResponse]=useState("")
  return (
    <div>
        
        <addResponseContext.Provider value={{addResponse,setAddResponse}}>
            {children}
            </addResponseContext.Provider>
        
        </div>

  )
}

export default ContextApi