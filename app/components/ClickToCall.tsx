"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";

export default function ClickToCall() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "+9779749404181";
  const displayNumber = "+977 9749404181";

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white shadow-lg transition hover:scale-105"
        >
          <Phone size={18} />
          <span>Call Us</span>
        </button>
      ) : (
        <div className="w-70 rounded-2xl bg-white p-5 shadow-2xl border">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">CALL US NOW</h3>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>

          <p className="mb-4 text-sm text-gray-600">
            Tap below to call directly.
          </p>

          <a
            href={`tel:${phoneNumber}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-white transition hover:bg-green-700"
          >
            <Phone size={18} />
            {displayNumber}
          </a>
        </div>
      )}
    </div>
  );
}