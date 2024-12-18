import {  useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function Navigation(){
  const [isScrolled, setIsScrolled] = useState(false)
  const {scrollY} = useScroll();

  useEffect(()=> {
    const unsubscribe = scrollY.on("change", (latest)=> {
      setIsScrolled(latest > 50)
    })
    return ()=> unsubscribe()
  },[scrollY])
  return(
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-blue-100' : 'bg-transparent'}`}>
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <span className="text-xl font-semibold">Bookbrain</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button>Login</button>
            <button >Sign Up</button>
          </div>
        </nav>
      </header>
  )
}


