import { motion } from "framer-motion";
const HoverComponents = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, rotate: "2.5deg" }}
        transition={{ duration: 0.125, ease: "easeInOut" }}
        className="bg-orange-500 text-white px-4 py-2"
      >
        Click me!
      </motion.button>
    </div>
  );
};

export default HoverComponents;
