import { motion } from "framer-motion";

function DrawnArrow({ src, className = "" }) {
  return (
    <motion.img
      src={src}
      alt="Arrow"
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    />
  );
}


export default DrawnArrow;