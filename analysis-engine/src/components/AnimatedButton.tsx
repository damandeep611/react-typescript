import {motion} from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

//AnimatedButtonProps will define the props that button component can accept
interface AnimatedButtonProps extends PropsWithChildren {
  label: string; //text content of the button
  variant? : 'primary' | 'secondary' | 'gray'; //button style
  className?: string; //tailwind classes 
  //to add logo to the 
}
//now our component starts 
//FC<AnimatedButtonProps> - FC(it is a functional component) and it accepts the props of type AnimatedButton
const AnimatedButton: FC<AnimatedButtonProps> = ({
  label, 
  variant = 'primary',
  className,
  children,
}) => {
  //button variants is to dfine the animaion bhevior when hoverd 
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transistion: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  }
  //for tailwind classes for styling - the Record is a generic type that is used to define and takes two type parameters(key and value) for object (buttonStyles)  and both parameters are strings, i.e both the (key) primary is string and also the (value) styling classes are also string
  const buttonStyles: Record<string, string> ={
    primary: 'bg-green-700 text-white',
    secondary: 'bg-gray-300 text-gray-800',
    gray: 'border bg-gray-700 text-white',
  }
  return (
    <motion.div whileHover={buttonVariants.hover}>
      <button
        className={`px-4 py-2 rounded-md font-medium ${buttonStyles[variant]} ${className}`}
      >
        {label}
        {children}
      </button>
    </motion.div>
  )
}

export default AnimatedButton