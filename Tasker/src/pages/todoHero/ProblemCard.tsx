import { ReactElement } from "react";

interface ProblemCardProps{
  title: string;
  icon: ReactElement
}

export default function ProblemCard({title, icon}:ProblemCardProps){
  return(
    <div className="w-[150px] h-[150px] border shadow-lg p-6 rounded-lg"
    >
      <div className="flex flex-col items-center justify-between gap-6">
        <div>
          {icon}
        </div>
        <div className="text-sm text-center">
          {title}
        </div>
      </div>
     
    </div>
  )
}