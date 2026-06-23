import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

const offset = (dir: Direction) => {
  switch (dir) {
    case "up":    return { y: 40 };
    case "left":  return { x: -40 };
    case "right": return { x: 40 };
    default:      return {};
  }
};

export function FadeInView({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInViewProps) {
  const reduced = useReducedMotion();
  const hidden = reduced ? { opacity: 0 } : { opacity: 0, ...offset(direction) };
  const visible = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
