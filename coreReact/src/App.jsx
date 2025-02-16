import FetchingData from "./components/Basic/FetchingData"
import Todo from "./components/Basic/Todo"
import UseStateDemo from "./components/Basic/UseStateDemo"

function App() {
  

  return (
    <>
     <div className="flex items-center justify-center  flex-col space-y-4">
      <UseStateDemo/>
      <div className="flex items-center justify-between px-8 w-full">
      <Todo/>
      <FetchingData/>
      </div>
     
     </div>
     
    </>
  )
}

export default App
