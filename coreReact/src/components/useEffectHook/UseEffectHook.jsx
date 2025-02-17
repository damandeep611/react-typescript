import BasicEffect from "./BasicEffect";
import ShowPrevValue from "./ShowPrevValue";

export default function UseEffectHook(){
  return(
    <div className="border-t border-black  p-8">
      <h2>This is the Use Effect funtion components</h2>
      <div>
        <BasicEffect/>
      </div>
      <div>
        <ShowPrevValue/>
      </div>
    </div>
  )
}