import { motion } from "framer-motion";
const BasicFarmerMotion = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ rotate: "0deg", scale: 0, y: 0 }}
        animate={{
          rotate: "180deg",
          scale: 1,
          y: [0, 150, -150, -150, 0],
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          times: [0, 0.25, 0.5, 0.85, 1],
        }}
        className="bg-black w-24 h-24 text-white flex items-center justify-center"
      >
        Hello
      </motion.div>
    </div>
  );
};

export default BasicFarmerMotion;
