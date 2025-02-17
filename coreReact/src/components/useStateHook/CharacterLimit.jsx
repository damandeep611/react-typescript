import { useState } from "react"

export default function CharacterLimit(){
  const [text, setText] = useState("")
  const maxLength = 180;

  const handleChange = (e)=> {
    setText(e.target.value)
  }
  return(
    <div>
      <label htmlFor="inputlimit"></label>
      <textarea name="input" id="inputlimit" value={text} onChange={handleChange} maxLength={maxLength} placeholder="type Something...." className="border border-gray-600"/>
      <p>{maxLength - text.length} Characters remaining</p>
    </div>
  )
}