import { Bolt, Close, Gallery, HelpCircle, Mark } from "@/components/Icons";
import { Rich } from "@/components/Rich";
import type { T } from "@/i18n";

export function CameraMock({ t }: { t: T }) {
  return (
    <div className="app-camera">
      <div className="cam-view">
        <div className="cam-guide">
          <Mark tone="muted" />
        </div>
        <div className="cam-top">
          <span className="cam-circle">
            <Close />
          </span>
          <span className="cam-actions">
            <span className="cam-circle">
              <HelpCircle />
            </span>
            <span className="cam-circle">
              <Bolt />
            </span>
          </span>
        </div>
        <div className="cam-hint">
          <p className="cam-hint-title">{t("camera.hintTitle")}</p>
          <p className="cam-hint-text">
            <Rich t={t} k="camera.hintText" />
          </p>
        </div>
      </div>
      <div className="cam-bar">
        <div className="cam-action">
          <span className="cam-side">
            <Gallery />
          </span>
          <span className="cam-label">{t("camera.gallery")}</span>
        </div>
        <div className="cam-action">
          <span className="cam-shutter">
            <span className="cam-core" />
          </span>
          <span className="cam-label">{t("camera.shutter")}</span>
        </div>
        <div className="cam-action">
          <span className="cam-ph" />
        </div>
      </div>
    </div>
  );
}
