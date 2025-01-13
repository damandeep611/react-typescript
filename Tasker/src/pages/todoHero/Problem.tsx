import problemsData from "@/lib/ProblemsData";
import ProblemCard from "./ProblemCard";

export default function Problem(){
  return(
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center">
        <h2 className="text-center text-3xl font-semibold mt-20 max-w-3xl">Task management and time tracking can be difficult</h2>
      </div>
      <div className="w-full  px-4 mt-32">
        <div className="flex flex-wrap justify-center gap-2 overflow-x-hidden">
          {problemsData.map((problem , index)=> (
            <div key={index} className="border border-gray-300 rounded-lg p-2" >
              <ProblemCard key={problem.title} icon={problem.icon} title={problem.title}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}