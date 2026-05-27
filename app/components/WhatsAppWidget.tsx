"use client";

import { useState, useEffect } from "react";

const PHONE_NUMBER = "9749404181";
const WA_LINK = `https://wa.me/${PHONE_NUMBER}`;

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Stop pulse after first open
  useEffect(() => {
    if (open) setPulse(false);
  }, [open]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        .wa-widget * { box-sizing: border-box; font-family: 'DM Sans', sans-serif; }

        /* Pulse ring */
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        .wa-pulse-ring {
          position: absolute; inset: -6px;
          border-radius: 50%;
          background: rgba(0,0,0,0.35);
          animation: wa-pulse 2s ease-out infinite;
        }
        .wa-pulse-ring.hidden { display: none; }

        /* Bubble slide-in */
        @keyframes wa-slidein {
          from { opacity: 0; transform: translateY(12px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .wa-bubble {
          animation: wa-slidein 0.28s cubic-bezier(.34,1.56,.64,1) both;
        }

        /* FAB */
        .wa-fab {
          position: relative;
          width:30px; height: 30px;
          border-radius: 50%;
          background: linear-gradient(145deg, #25d366, #128c5e);
            // background: #000; 
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 20px rgba(37,211,102,0.45);
          // box-shadow: 0 6px 20px rgba(0,0,0,0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .wa-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 28px rgba(37,211,102,0.55);
        }
        .wa-fab:active { transform: scale(0.96); }

        /* Chat card */
        .wa-card {
          width: 300px;
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.18);
        }
        .wa-card-header {
          background: linear-gradient(135deg, #075e54, #128c7e);
          padding: 18px 16px;
          display: flex; align-items: center; gap: 12px;
        }
        .wa-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        .wa-card-name { color: #fff; font-weight: 600; font-size: 15px; line-height: 1.2; }
        .wa-card-status { color: rgba(255,255,255,0.72); font-size: 12px; margin-top: 2px; }

        .wa-card-body {
          padding: 16px;
          background: #f0f4f8;
        }
        .wa-msg-bubble {
          background: #fff;
          border-radius: 0 12px 12px 12px;
          padding: 10px 14px;
          font-size: 13.5px;
          color: #333;
          line-height: 1.5;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          max-width: 90%;
        }
        .wa-msg-time {
          font-size: 10px; color: #aaa; margin-top: 4px; text-align: right;
        }

        .wa-card-footer { padding: 12px 16px 14px; }
        .wa-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%;
          background: #25d366;
          color: #fff; font-weight: 600; font-size: 14px;
          border: none; border-radius: 50px;
          padding: 12px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s ease, transform 0.15s ease;
        }
        .wa-cta:hover { background: #1ebe5d; transform: translateY(-1px); }
        .wa-cta:active { transform: translateY(0); }

        /* Close X on header */
        .wa-close-btn {
          background: none; border: none;
          color: rgba(255,255,255,0.7); font-size: 20px;
          cursor: pointer; line-height: 1; padding: 2px 4px;
          transition: color 0.15s;
        }
        .wa-close-btn:hover { color: #fff; }
      `}</style>

      {/* Fixed container — bottom-right */}
      <div
        className="wa-widget  lg:mb-9 lg:ml-1"
        style={{
          position: "fixed",
          bottom: "2px",
          left: "22px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "14px",
          zIndex: 9999,
        }}
      >
       
        {/* Chat popup card */}
        {open && (
          <div className="wa-card wa-bubble">
            {/* Header */}
           
            <div className="wa-card-header">
               
              <div className="wa-avatar">🧑‍💼</div>
              <div>
                <div className="wa-card-name">Support</div>
                <div className="wa-card-status">● Typically replies instantly</div>
              </div>
               <button className="wa-close-btn" onClick={() => setOpen(false)} aria-label="Close">
                <span className="ml-5 text-2xl text-white">×</span>
              </button>
              
            </div>

            {/* Body — sample message */}
            <div className="wa-card-body">
              <div className="wa-msg-bubble">
                👋 Hi there! How can we help you today? Tap below to start a chat.
              </div>
              <div className="wa-msg-time">just now</div>
            </div>

            {/* CTA */}
            <div className="wa-card-footer">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-cta"
              >
                {/* WhatsApp SVG icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.776a.5.5 0 0 0 .612.612l5.934-1.472A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.67-.502-5.203-1.381l-.374-.219-3.875.961.979-3.773-.24-.389A9.953 9.953 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* FAB button */}
        <button
          className="wa-fab"
          onClick={() => setOpen((o) => !o)}
          aria-label="Open WhatsApp chat"
        >
          {pulse && !open && <span className="wa-pulse-ring" />}

          {open ? (
            /* X icon when open */
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ) : (
            /* WhatsApp icon */
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.776a.5.5 0 0 0 .612.612l5.934-1.472A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.67-.502-5.203-1.381l-.374-.219-3.875.961.979-3.773-.24-.389A9.953 9.953 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
