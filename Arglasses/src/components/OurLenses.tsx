import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";

const productInfo = [
  {
    id: 1,
    title: "prescription sun",
    imageUrl:
      "https://images.pexels.com/photos/1435405/pexels-photo-1435405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "protect your eyes from the sun, without compromising on your vision needs. Choose prescription sun lenses on any frame",
  },
  {
    id: 2,
    title: "Blue Light Blocking Glasses",
    imageUrl:
      "https://images.pexels.com/photos/393043/pexels-photo-393043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Block blue light and reduce eye strain from digital devices.",
  },
  {
    id: 3,
    title: "Sports Glasses",
    imageUrl:
      "https://images.pexels.com/photos/8688561/pexels-photo-8688561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Provide protection and improve performance during physical activities.",
  },
  {
    id: 4,
    title: "Aviator Sunglasses",
    imageUrl:
      "https://images.pexels.com/photos/1798665/pexels-photo-1798665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Classic and stylish sunglasses with a large metal frame.",
  },
  {
    id: 5,
    title: "Cat-Eye Sunglasses",
    imageUrl:
      "https://images.pexels.com/photos/3379232/pexels-photo-3379232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A feminine and trendy style with an upswept frame.",
  },
  {
    id: 6,
    title: "Round Sunglasses",
    imageUrl:
      "https://images.pexels.com/photos/2334083/pexels-photo-2334083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A timeless style that looks good on many face shapes.",
  },
];

export default function OurLenses() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
  return (
    <section className="bg-blue-500  ">
      {/* header info */}
      <div className="flex items-center justify-between text-white p-12">
        <span className="text-sm bg-white text-black uppercase p-2 px-8">
          Lenses
        </span>
        <div className=" text-center">
          <h2 className="text-5xl uppercase font-md leading-loose">
            Our lenses
          </h2>
        </div>
        <button className="bg-white text-black uppercase p-2 px-8">
          All lenses
        </button>
      </div>
      {/* product carousel   */}
      <div ref={emblaRef} className=" embla text-white">
        <div className="embla__container  m-2">
          {productInfo.map((card) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<ProductCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="overflow-hidden embla__slide border-2 max-w-md m-2 border-none ">
      <img src={imageUrl} alt={title} className="rounded-lg max-w-md " />
      <div>
        <h3 className="text-lg uppercase">{title}</h3>
        <p className="text-xs text-blue-300">{description}</p>
      </div>
    </div>
  );
};
