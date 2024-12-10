import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PricingSection() {
  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tailored Plans for Your Manufacturing Scale
          </h2>
          <p className="text-gray-400">
            Flexible pricing for any business size.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6 text-white ">
          {/* Starter Plan */}
          <Card className="bg-zinc-900 border-zinc-800 text-white">
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold">Starter</h3>
                <p className=" mt-2">
                  This package offers the basic features you need to get
                  started.
                </p>
              </div>

              <div className="flex items-baseline text-white">
                <span className="text-4xl font-bold">$39</span>
                <span className=" ml-2">/ month</span>
              </div>

              <Button className="w-full bg-zinc-800 hover:bg-zinc-700">
                Get Started
              </Button>

              <div className="space-y-4 pt-4 text-white">
                <h4 className="">Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Production up to 10,000 units per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Access the production dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Initial setup guide</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 space-y-6 text-white">
              <div>
                <h3 className="text-2xl font-semibold">Enterprise</h3>
                <p className="text-gray-400 mt-2">
                  This package provides full access to all premium features.
                </p>
              </div>

              <div className="flex items-baseline">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-400 ml-2">/ month</span>
              </div>

              <Button className="w-full bg-zinc-800 hover:bg-zinc-700">
                Get Started
              </Button>

              <div className="space-y-4 pt-4">
                <h4 className="text-gray-400">Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Unlimited production units</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Tailored manufacturing solutions</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>Predictive production optimization</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Plan */}
        <Card className="bg-gradient-to-br from-teal-900 to-teal-950 border-teal-800">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Professional</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Designed for greater flexibility, this solution offers advanced
              tools for custom tailoring to your needs.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-400 text-black">
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
