import { useEffect, useState } from "react"
import {Sun, Moon} from 'lucide-react'

export default function ThemeSwitcher(){
  const [theme, setTheme] = useState("light")

  useEffect(()=> {
    const storedTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia('(prefers-color-scheme:dark)').matches;

    const initialTheme = storedTheme || (systemPreference ? 'dark' : 'light');
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  },[])

  const toggleTheme = ()=> {
    const newTheme  = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newTheme)
  }
  return(
    <button onClick={toggleTheme} className="cursor-pointer">
      {theme === "light" ? (
        <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200"/>
      ) : <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200"/>}
    </button>
  )
}