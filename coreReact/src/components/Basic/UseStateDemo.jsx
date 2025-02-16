import { useState } from 'react'

const UseStateDemo = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // toggle button states 
  const [isOn, setIsOn] = useState(false)
  // for entering multiple inputs in single state (Object State)
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: ""
  })

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(`Username is: ${username} and the password entered is: ${password}`)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    console.log("User Data:", user);
  };
  return (
    <>
     <div className="w-full flex flex-col items-center border border-black   ">
      <h2 className="text-4xl pointer-cursor">React custom hooks to use </h2>
      <div className=' w-full flex items-center justify-between p-4'>
      {/* ------------------------------------form */}
      <div className='border border-black grow'>
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
      <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} className="border border-black p-2 " />
      <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} className="border border-black p-2 mx-2" />
      <button type="submit" className="bg-black text-white p-2 px-8">Login</button>
    </form>
      </div>
      {/*---------------------------------------- toggle button useSTate */}
      <div className='border border-black p-8 grow text-center '>
    <button className="bg-black text-white p-2 px-8 cursor-pointer " onClick={()=> setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
    {isOn && <p>The button is ON</p>}
      </div>

      {/*-------------------------- this is for multiple inputs in single state (Object State) */}
      <div className='border border-black  grow flex flex-col items-center justify-center'>
        <div><h2>User profile data</h2></div>
        <form onSubmit={handleSubmitUser} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="user" className="block text-gray-700 font-bold mb-2">User Name</label>
        <input
          type="text"
          id="user"
          name="name"
          placeholder="Enter User Name"
          value={user.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required // Example validation
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">User Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter User Email"
          value={user.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required // Example validation
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-bold mb-2">User Age</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="User Age"
          value={user.age}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required // Example validation
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      >
        Submit
      </button>
    </form>
      </div>
      </div>
     </div>
     
    </>
  )
}


export default UseStateDemo
