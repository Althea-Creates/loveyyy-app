import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function FinalQuestion() {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleYesClick = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const colors = ['#00cc66', '#8a2be2'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    setShowQuestion(false);
    setShowMessage(true);
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      {showQuestion && (
        <>
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Ako na ngayon ang magtatanong:
          </h2>
          <p className="text-xl mb-6 text-gray-700">
            Kelan mo ako sasagutin?
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={handleYesClick}
              whileHover={{ scale: 1.1 }}
              className="button-2"
            >
              NGAYON NA 💚
            </motion.button>
            <motion.button
              onClick={handleYesClick}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600"
            >
              Magbibigay ako date bleh 💜
            </motion.button>
          </div>
          <p className="mt-8 text-sm text-gray-500 italic">
            Walang "No" option kasi bawal tumanggi. Bleh 😋😌
          </p>
        </>
      )}

      {showMessage && (
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold text-green-600">YAAAY! 🎉💖</h2>
          <p className="mt-4 text-lg text-purple-700">
            You just made this nerd's heart flutter 💚💜
            <br /> Bawal na mag back-out 😉
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}