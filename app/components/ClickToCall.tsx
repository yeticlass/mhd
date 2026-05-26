"use client";

import { useState, useEffect } from "react";

interface ClickToCallProps {
  phoneNumber?: string;
  label?: string;
  availability?: string;
}

export default function ClickToCall({
  phoneNumber = "+977-9749404181",
  label = "Call Us",
  availability = "Available · Mon–Sat, 9am–6pm",
}: ClickToCallProps) {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [calling, setCalling] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Periodic pulse on the trigger button
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 700);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleCall = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
    setCalling(true);
    setTimeout(() => setCalling(false), 2500);
  };

  const cleanNumber = phoneNumber.replace(/[^+\d]/g, "");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .ctc-wrapper {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          font-family: 'Syne', sans-serif;
        }

        /* ── POPUP CARD ── */
        .ctc-card {
          background: #111;
          border: 1px solid #2a2a2a;
          border-radius: 18px;
          padding: 20px 22px 16px;
          width: 270px;
          box-shadow: 0 12px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04);
          position: relative;
          overflow: hidden;
          transform-origin: bottom right;
          animation: popIn 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.7) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .ctc-card-exit {
          animation: popOut 0.18s ease-in forwards;
        }

        @keyframes popOut {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to   { opacity: 0; transform: scale(0.75) translateY(10px); }
        }

        .ctc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 60% -10%, rgba(0,230,118,0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        .ctc-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .ctc-card-title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f0f0f0;
        }

        .ctc-close {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid #2a2a2a;
          background: #1a1a1a;
          color: #888;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          line-height: 1;
          transition: background 0.2s, color 0.2s;
          padding: 0;
        }
        .ctc-close:hover { background: #2a2a2a; color: #f0f0f0; }

        /* ── CALL BUTTON ── */
        .ctc-call-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 11px;
          background: #0a0a0a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          padding: 12px 16px;
          text-decoration: none;
          color: #f0f0f0;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
          width: 100%;
        }
        .ctc-call-btn:hover {
          border-color: #00c85a;
          box-shadow: 0 0 0 3px rgba(0,230,118,0.18), 0 4px 20px rgba(0,0,0,0.3);
          transform: translateY(-1px);
        }
        .ctc-call-btn:active { transform: scale(0.97); }

        .ctc-call-btn.calling {
          border-color: #00e676;
          box-shadow: 0 0 0 3px rgba(0,230,118,0.22);
        }

        .ctc-icon-ring {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(0,230,118,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .ctc-call-btn:hover .ctc-icon-ring { background: rgba(0,230,118,0.2); }
        .ctc-call-btn.calling .ctc-icon-ring { animation: wiggle 0.45s ease; }

        @keyframes wiggle {
          0%,100% { transform: rotate(0); }
          20% { transform: rotate(-18deg); }
          40% { transform: rotate(16deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(8deg); }
        }

        .ctc-phone-svg {
          width: 16px;
          height: 16px;
          color: #00e676;
        }

        .ctc-info { display: flex; flex-direction: column; gap: 2px; }

        .ctc-tap-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #00e676;
          line-height: 1;
        }

        .ctc-number {
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          font-weight: 500;
          color: #f0f0f0;
          letter-spacing: 0.03em;
          line-height: 1.4;
        }

        .ctc-ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(0,230,118,0.18);
          width: 100px;
          height: 100px;
          margin-left: -50px;
          margin-top: -50px;
          transform: scale(0);
          animation: ripple-out 0.65s linear;
          pointer-events: none;
        }
        @keyframes ripple-out {
          to { transform: scale(5); opacity: 0; }
        }

        /* status row */
        .ctc-status-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          min-height: 15px;
        }

        .ctc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ctc-dot.green {
          background: #00e676;
          box-shadow: 0 0 5px #00e676;
          animation: blink 1.8s ease-in-out infinite;
        }
        .ctc-dot.amber {
          background: #ffb300;
          animation: blink 0.7s ease-in-out infinite;
        }
        @keyframes blink {
          0%,100% { opacity:1; } 50% { opacity:0.25; }
        }

        .ctc-status-text {
          font-size: 11px;
          color: #666;
          letter-spacing: 0.04em;
        }
        .ctc-status-text.calling-text { color: #00e676; }

        /* ── TRIGGER BUTTON ── */
        .ctc-trigger {
          display: flex;
          align-items: center;
          gap: 9px;
          background: #00e676;
          color: #0a0a0a;
          border: none;
          border-radius: 50px;
          padding: 13px 22px 13px 16px;
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.06em;
          box-shadow: 0 4px 24px rgba(0,230,118,0.4), 0 2px 8px rgba(0,0,0,0.3);
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .ctc-trigger:hover {
          background: #00ff85;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,230,118,0.5), 0 2px 8px rgba(0,0,0,0.3);
        }
        .ctc-trigger:active { transform: scale(0.96); }

        .ctc-trigger.pulse-anim {
          animation: triggerPulse 0.6s ease;
        }
        @keyframes triggerPulse {
          0% { box-shadow: 0 4px 24px rgba(0,230,118,0.4); }
          50% { box-shadow: 0 4px 40px rgba(0,230,118,0.8), 0 0 0 8px rgba(0,230,118,0.15); }
          100% { box-shadow: 0 4px 24px rgba(0,230,118,0.4); }
        }

        .ctc-trigger-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .ctc-trigger-icon.ringing {
          animation: wiggle 0.5s ease infinite;
        }
      `}</style>

      <div className="ctc-wrapper">
        {/* POPUP */}
        {open && (
          <div className="ctc-card">
            <div className="ctc-card-header">
              <span className="ctc-card-title">Call Us Now</span>
              <button className="ctc-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>

            <a
              href={`tel:${cleanNumber}`}
              className={`ctc-call-btn ${calling ? "calling" : ""}`}
              onClick={handleCall}
              aria-label={`Call ${phoneNumber}`}
            >
              {ripples.map((r) => (
                <span key={r.id} className="ctc-ripple" style={{ left: r.x, top: r.y }} />
              ))}

              <div className="ctc-icon-ring">
                <svg className="ctc-phone-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>

              <div className="ctc-info">
                <span className="ctc-tap-label">Tap to call</span>
                <span className="ctc-number">{phoneNumber}</span>
              </div>
            </a>

            <div className="ctc-status-row">
              <span className={`ctc-dot ${calling ? "amber" : "green"}`} />
              <span className={`ctc-status-text ${calling ? "calling-text" : ""}`}>
                {calling ? "Connecting call…" : availability}
              </span>
            </div>
          </div>
        )}

        {/* TRIGGER */}
        <button
          className={`ctc-trigger ${pulse ? "pulse-anim" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close call widget" : label}
        >
          <svg
            className={`ctc-trigger-icon ${!open ? "ringing" : ""}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {open
              ? <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              : <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            }
          </svg>
          {!open ? label : "Close"}
        </button>
      </div>
    </>
  );
}
