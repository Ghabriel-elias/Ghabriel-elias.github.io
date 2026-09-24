import { FaceFeatures, Send, Sprig } from "@/components/Icons";
import type { T } from "@/i18n";

export function BrotinhoArt() {
  return (
    <svg className="feature-art" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="92" fill="#DDE3D6" />
      <g transform="translate(100 72)">
        <path d="M-4 60 L-4 12 Q-4 4 4 4 L4 60 Z" fill="#6E8265" />
        <circle cx="0" cy="0" r="34" fill="#8FA383" />
        <g transform="scale(0.7083)">
          <Sprig />
        </g>
        <g transform="translate(0 2) scale(0.85)">
          <FaceFeatures />
        </g>
      </g>
      <g transform="translate(100 146) scale(0.33) translate(0 -33)">
        <rect x="-108" y="-46" width="216" height="40" rx="14" fill="#B4522F" />
        <path d="M-94 2 L94 2 L72 96 Q72 112 54 112 L-54 112 Q-72 112 -72 96 Z" fill="#C88B6A" />
      </g>
    </svg>
  );
}

function ChatFace() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#8FA383" />
      <g transform="translate(50 50)">
        <Sprig />
      </g>
      <g transform="translate(50 52) scale(1.15)">
        <FaceFeatures />
      </g>
    </svg>
  );
}

export function ChatMock({ t }: { t: T }) {
  return (
    <div className="cutout" aria-hidden="true">
      <div className="chat-row">
        <p className="bubble bubble-user">{t("brotinho.ask")}</p>
      </div>

      <div className="chat-row chat-bot">
        <span className="chat-face">
          <ChatFace />
        </span>
        <p className="bubble bubble-bot">{t("brotinho.answer")}</p>
      </div>

      <div className="chat-composer">
        <p className="chat-field">{t("brotinho.field")}</p>
        <span className="chat-send">
          <Send />
        </span>
      </div>
    </div>
  );
}
