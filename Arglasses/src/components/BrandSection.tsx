import { MoveUpRight } from "lucide-react";
import React from "react";
import fendi from "@/assets/fendi.svg";

export default function BrandSection() {
  return (
    <section className="py-12 bg-blue-500 ">
      <div>
        <div>
          <h2 className="text-white text-center text-5xl  leading-tight font-light uppercase">
            purchase with any <br /> insurance made easy
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <BrandCards name="Fendi" imageUrl={fendi} />
          <BrandCards name="Fendi" imageUrl={fendi} />
          <BrandCards name="Fendi" imageUrl={fendi} />
          <BrandCards name="Fendi" imageUrl={fendi} />
          <BrandCards name="Fendi" imageUrl={fendi} />
        </div>
      </div>
    </section>
  );
}

interface BrandCardsProps {
  name: string;
  imageUrl: string;
}

const BrandCards: React.FC<BrandCardsProps> = ({ name, imageUrl }) => {
  return (
    <div className="w-72 flex flex-col items-center justify-center border border-blue-200 m-2 rounded-lg">
      <img src={imageUrl} alt="" className="w-48" />
      <div className="flex w-full items-center justify-between px-4 p-2  text-white ">
        <span>{name}</span>
        <MoveUpRight width={15} />
      </div>
    </div>
  );
};
