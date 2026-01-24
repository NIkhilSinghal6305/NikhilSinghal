import { motion } from "framer-motion";

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const pageTransition = {
  duration: 0.9,
  ease: "easeOut",
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
