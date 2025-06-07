import React from 'react';
import './FloatingHearts.css'; 

export default function FloatingHearts() {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="hearts-container pointer-events-none absolute inset-0 z-0">
      {hearts.map((_, i) => (
        <span
            key={i}
            className={`heart ${i % 2 === 0 ? 'green' : 'purple'}`}
            style={{
            '--rand-left': Math.random(),
            animationDelay: `${Math.random() * 5}s`,
            }}
        />
        ))}
    </div>
  );
}