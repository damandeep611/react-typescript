import ShowPrevValue from "./ShowPrevValue";

export default function UseEffectHook() {
  return (
    <div className="border-t border-black  p-8">
      <h2>This is the Use Effect funtion components</h2>
      <div></div>
      <div>
        {/* here <BasicEffect/> component was used,  */}
        <ShowPrevValue />
      </div>
    </div>
  );
}
