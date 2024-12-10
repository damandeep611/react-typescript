import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Pricing() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lightbulb />
    </div>
  );
}

function Lightbulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb ON" : "Bulb off"}</div>;
}

function ToggleBulbState({ bulbOn, setBulbOn }) {
  function toggle() {
    setBulbOn(!bulbOn);
  }
  return (
    <div>
      <Button onClick={toggle}>Toggle the bulb</Button>
    </div>
  );
}
