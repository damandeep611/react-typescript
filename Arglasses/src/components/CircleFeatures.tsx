import CircleWithAnimation from "./Circle";

export default function CircleFeatures() {
  return (
    <section className="bg-blue-500  ">
      {/* header info */}
      <div className="flex items-center justify-between text-white p-12">
        <span className="text-sm bg-white text-black uppercase p-2 px-8">
          payment
        </span>
        <div className=" text-center">
          <h2 className="text-5xl uppercase font-md leading-loose">
            Buy now - pay later
          </h2>
          <p className="max-w-md">
            Upgrade your vision with effortless style and flexible payment
            options. Don't miss out on this limited-time offer – pre-order today
            and step into the future of eyewear.
          </p>
        </div>
        <button className="bg-white text-black uppercase p-2 px-8">
          shop eyeglasses
        </button>
      </div>
      {/* circle payment features  */}

      <CircleWithAnimation />
    </section>
  );
}
