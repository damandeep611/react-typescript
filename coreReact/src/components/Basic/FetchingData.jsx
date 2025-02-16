import { useEffect, useState } from "react"

const FetchingData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response)=> response.json())
      .then((json)=> {setData(json);
        setLoading(false)
      })
      
  },[])

  if(loading){
    return <p>Loading....</p>
  }
  return (
    <div>
      <h1 className="text-green-500">Fetching todo data and showing </h1>
      <div className="max-w-xs border border-black p-1">
        <h1 className="text-lg font-semibold">{data.title}</h1>
        <p className="text-gray-600 text-xs">{data.body}</p>
      </div>
    </div>
  )
}

export default FetchingData
