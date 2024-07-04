import { motion, useAnimationControls } from "framer-motion";

const ControlComponets = () => {
  const flipControl = useAnimationControls();

  const handleClick = () => {
    flipControl.start("flip");
  };
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <button
        className="bg-[#06D001] text-white px-4 py-2 cursor-pointer"
        onClick={handleClick}
      >
        Flip it
      </button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "180deg",
          },
        }}
        whileHover="flip"
        transition={{
          duration: 1,
        }}
        animate={flipControl}
        className="bg-black h-16 w-16"
      ></motion.div>
    </div>
  );
};

export default ControlComponets;
