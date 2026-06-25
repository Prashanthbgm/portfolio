import { motion } from "framer-motion";

export default function Orbittag({
  icon: Icon,
  text,
  radius,
  duration,
  size = 80,
}) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{ transform: `translate(-50%, -50%) translateY(-${radius}px)` }}
      >
        <div
          style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px`, minHeight: `${size}px` }}
          className="rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center text-white shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        >
          <Icon size={Math.max(18, size * 0.4)} />
          <span className="text-[10px] mt-2 text-center px-1">{text}</span>
        </div>
      </div>
    </motion.div>
  );
}
