import TextAnimationSection from "@/components/showcase/Hero/TextAnimationSection";
import { ShowcaseComponent } from "../ShowcaseComponent";
import Motion from "@/pages/designcomponents/Motion";
import { heroComponentCode } from "@/data/codeSnippets/HeroCode";

export default function Heros() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <ShowcaseComponent
        title="Text Animation Hero"
        badge="Free"
        component={<TextAnimationSection />}
        code={`export default function LongComponent() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Very Long Component</h1>
      {Array.from({ length: 20 }).map((_, index) => (
        <p key={index} className="text-gray-700">
          This is paragraph {index + 1}. It contains a lot of text to demonstrate scrolling within the component view.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      ))}
    </div>
  )
}`}
        fullWidth={false}
        language="typescript"
      />

      {/* showcasing a animatee component  */}
      <ShowcaseComponent
        title="Orbital Motion"
        badge="Free"
        component={<Motion />}
        code={heroComponentCode}
        fullWidth={false}
        language="typescript"
      />
    </div>
  );
}
