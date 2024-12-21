import { Card } from "@/components/ui/card";

export default function BentoGrid() {
  return (
    <section className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* pricing card */}
        <div>
          <Card className="p-6 border border-gray-400/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200/10 to-gray-400/10" />
            <span className="px-3 py-1">New</span>
            <div>
              <h2>Empower your team to solve</h2>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
