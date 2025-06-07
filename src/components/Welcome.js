import { motion } from 'framer-motion';

export default function Welcome({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-pink-700">Hi Loveyyy 💖</h1>
      <p className="mt-4 text-lg text-gray-700">
        "Kelan mo ko sasagutin?" ang lagi mong tanong hahaha eh as a overachiever at maarte na bading
        naisip ko na sagutin ka sa magandang date and romatic na way. (Btw mas okay kung iplay mo ang music para dama)"
      </p>
      <p className="mt-2 text-gray-600">So, here we are...</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="mt-8 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
      >
        Click me sweetie 🫣
      </motion.button>
    </motion.div>
  );
}