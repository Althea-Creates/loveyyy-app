import { motion } from 'framer-motion';

export default function Messages({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center p-6"
    >
      <p className="text-xl text-gray-800">Alam mo ba gustong gusto ko ang ngiti mo, ang pagkabungisngis mo</p>
      <p className="mt-4 text-xl text-gray-800">You're the kind of person that's so strong on the outside but has a reallyyyy soft heart</p>
      <p className="mt-4 text-xl text-gray-800">It's something that I admire about you. There's a lot of things actually...pero di ko malista lahat baka maging nobela pa</p>
      <p className="mt-4 text-xl text-gray-800">Hindi kita plinano, pero ngayon kasama ka na sa plano ko </p>
      <p className="mt-4 text-xl text-gray-800">Kaya siguraduhin mong sure ka na kasi wala akong balak umatras 😏</p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="mt-8 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
      >
        Kinikilig ka na noh 😳💓
      </motion.button>
    </motion.div>
  );
}