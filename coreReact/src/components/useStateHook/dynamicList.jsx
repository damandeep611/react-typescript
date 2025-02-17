import { useState } from "react"

export default function DynamicList(){
  const [isOpen, setIsOpen] = useState(false)
  return(
   <div>
    <button onClick={()=> setIsOpen(!isOpen)}>
      {isOpen ? 'Collapse' : 'Expand'}
    </button>
    {isOpen && (
      <div style={{marginTop: '10px', padding: '10px', border: '1px solid #ccc'}}>
        This is the hidden content
      </div>
    )}
   </div>
  )
}