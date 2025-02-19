import { Button } from "./ui/button";
import { motion } from "framer-motion";

const newArrivals = [
  {
    name: "Aviator Classic",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Retro Round",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Modern Square",
    price: "$159",
    image:
      "https://images.unsplash.com/photo-1547194444-a435dc9fc2aa?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cat Eye Chic",
    price: "$139",
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

export default function ParallaxProduct() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
        {newArrivals.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className=" rounded-lg  overflow-hidden text-gray-800"
          >
            <img
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-white flex flex-col items-start">
              <h3 className="text-xl font-light mb-2">{item.name}</h3>
              <p className=" text-xs mb-4">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <Button
          variant="secondary"
          className="bg-white text-[#4299e1] hover:bg-gray-100 text-lg px-8 py-3"
        >
          SHOP ALL NEW ARRIVALS
        </Button>
      </motion.div>
      {/* two grid product showcase  */}
      <div className="py-12 gap-4 grid grid-cols-2">
        {/* glass showcase */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600/40 z-10 rounded-xl" />
          <img
            src="https://sunglass.la/cdn/shop/products/2933d_a5676bd6-9ecb-4895-bb44-23dd9f61cb51_2000x.jpg?v=1587632122"
            alt=""
            className="rounded-xl h-[600px] w-full object-cover relative"
          />
        </div>
        {/* right showcase  */}
        <div className="bg-blue-400 rounded-xl  ">
          <div className="flex flex-col m-12  gap-6 items-center justify-center">
            <h2 className="uppercase text-center text-4xl font-light">
              swarovski <br /> eyewear
            </h2>
            <img
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt=""
              width={300}
              height={300}
              className="rounded-lg"
            />
            <p className="max-w-sm text-gray-100 text-xs text-center">
              Introducing the "Vision X," where the future of eyewear meets
              cutting-edge technology. These aren't just glasses; they're a
              wearable tech powerhouse.
            </p>
            <button className="bg-white text-black p-2 px-8 rounded-lg">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
