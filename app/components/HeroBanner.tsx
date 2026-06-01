import React from 'react'
import { useState } from 'react';
const HeroBanner = () => {
  const [isOpen, setIsOpen] = useState(true);

if (!isOpen) return null;
  return (
    <div>
       <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 z-50 bg-white rounded-full w-8 h-8 hover:cursor-pointer flex items-center justify-center"
        >
          ✕
        </button>

        <img
          src="/images/banners/pvc-img.jpg"
          alt="PVC Ceiling"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
    </div>
  )
}

export default HeroBanner
