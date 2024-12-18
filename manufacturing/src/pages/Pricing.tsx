import { Button } from "@/components/ui/button";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

const count = atom({
  key: "countState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <RecoilRoot>
        <div className="flex gap-3">
          <Incrase />
          <Decrease />
        </div>
        <Value />
      </RecoilRoot>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return (
    <Button onClick={() => setCount((count) => count - 1)}>Decrease</Button>
  );
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return (
    <Button onClick={() => setCount((count) => count + 1)}>Increase</Button>
  );
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
