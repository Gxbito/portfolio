import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function AnimatedWrapper({ children, delay = 0, style, y = 40, x = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedWrapper;
