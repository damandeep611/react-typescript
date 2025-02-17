import FetchingData from "./components/Basic/FetchingData"
import Todo from "./components/Basic/Todo"
import UseStateDemo from "./components/Basic/UseStateDemo"
import ThemeSwitcher from "./components/layout/theme-switcher";
import UseEffectHook from "./components/useEffectHook/UseEffectHook";
import UseStateHook from "./components/useStateHook/UseStateHook";

function App() {
  return (
    <>
      <div className="flex items-center justify-center p-8">
        <ThemeSwitcher />
      </div>

      <div className="flex items-center justify-center bg-white dark:bg-slate-800  flex-col space-y-4">
        <UseStateDemo />
        <div className="flex items-center justify-between px-8 w-full">
          <Todo />
          <FetchingData />
        </div>
        <div>
          <UseStateHook />
        </div>
        <div>
          <UseEffectHook />
        </div>
      </div>
    </>
  );
}

export default App
