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
      "https://images.unsplash.com/photo-1619089662078-7fda3fdec8cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {newArrivals.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-gray-800"
          >
            <img
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.price}</p>
              <Button
                variant="outline"
                className="w-full text-[#4299e1] border-[#4299e1] hover:bg-[#4299e1] hover:text-white"
              >
                View Details
              </Button>
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
    </div>
  );
}
