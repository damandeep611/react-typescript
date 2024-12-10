import { ArrowUpRight } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import React from "react";
import {
  SiGraphql,
  SiOpensourcehardware,
  SiPantheon,
  SiSatellite,
  SiWorkplace,
} from "react-icons/si";
import { GiMining } from "react-icons/gi";

export default function Services() {
  return (
    <section className="bg-main min-h-screen mt-28 flex items-center justify-center">
      <div className="max-w-7xl flex flex-col items-center justify-between">
        <div className="text-center py-20 text-white">
          <h2 className="capitalize text-4xl font-semibold leading-tight max-w-md">
            Efficient and integrated manufacturing services
          </h2>
          <p className="my-8 text-gray-300">
            Simplify operations with our efficient, quality focused services
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <ServiceCard
            title="Satellite Design"
            description="Innovative solutions for designing satellites for mining operations in space."
            Icon={<SiSatellite color="white" />}
          />

          <ServiceCard
            title="Resource Extraction"
            description="Advanced techniques for extracting rare minerals from asteroids and planets."
            Icon={<GiMining color="white" />}
          />

          <ServiceCard
            title="Sustainability Solutions"
            description="Environmentally friendly methods for space exploration and mineral mining."
            Icon={<SiPantheon color="white" />}
          />

          <ServiceCard
            title="Supply Chain Optimization"
            description="End-to-end solutions to optimize the logistics of space mineral transportation."
            Icon={<SiWorkplace color="white" />}
          />

          <ServiceCard
            title="Data Analytics & Insights"
            description="Real-time analytics to monitor and enhance space mining operations."
            Icon={<SiGraphql color="white" />}
          />

          <ServiceCard
            title="Robotics and Automation"
            description="Cutting-edge robotics to automate extraction and processing in space."
            Icon={<SiOpensourcehardware color="white" />}
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  Icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <Card className="relative bg-service-card border-0 hover:bg-[#234141] transition-colors group">
      <CardHeader>
        <div className="flex justify-between items-start">
          {Icon}
          <ArrowUpRight className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors" />
        </div>
        <CardTitle className="text-xl text-white mt-6">{title}</CardTitle>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
