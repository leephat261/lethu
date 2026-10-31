import React, { useState } from "react";
import { Cake, RotateCcw } from "lucide-react";
import { birthdayConfig } from "../data/birthdayConfig";
import { triggerWishBlownConfetti } from "../utils/confettiHelper";

export const MakeAWishCake = () => {
  const { cakeSection } = birthdayConfig;
  const [isBlown, setIsBlown] = useState(false);

  const handleBlowCandle = () => {
    if (!isBlown) {
      setIsBlown(true);
      triggerWishBlownConfetti();
    }
  };

  const handleRelight = () => {
    setIsBlown(false);
  };

  return (
    <section className="pixel-cake-section" id="section-cake">
      <div className="section-header">
        <span className="pixel-badge">
          <Cake size={13} />
          WISH QUEST • LEVEL UP
        </span>
        <h2 className="section-title">
          {cakeSection.title}
        </h2>
        <p className="section-subtitle">
          {cakeSection.subtitle}
        </p>
      </div>

      <div className="pixel-card pixel-cake-card">
        {/* Sân khấu chiếc bánh sinh nhật Pixel Bakery thủ công */}
        <div
          className="pixel-cake-stage"
          onClick={handleBlowCandle}
          role="button"
          tabIndex={0}
          title={isBlown ? "Nến đã thổi" : "Chạm để thổi nến"}
        >
          {/* Asset bánh kem thủ công */}
          <div className="pixel-cake-asset-container">
            <img
              src="/assets/ui-cake.svg"
              alt="Handcrafted Birthday Cake"
              className="pixel-cake-img"
              loading="eager"
            />

            {/* Khi nến bị thổi tắt, che ngọn lửa bằng hiệu ứng khói mỏng */}
            {isBlown && (
              <div className="pixel-smoke-cover">
                <span className="smoke-puff sp-1" />
                <span className="smoke-puff sp-2" />
                <span className="smoke-puff sp-3" />
              </div>
            )}
          </div>
        </div>

        {/* Nút bấm điều khiển */}
        <div style={{ marginTop: "16px" }}>
          {!isBlown ? (
            <button
              className="btn-pixel-primary"
              onClick={handleBlowCandle}
              id="btn-blow-candle"
            >
              <span>🕯️</span>
              <span>{cakeSection.buttonText}</span>
            </button>
          ) : (
            <div className="pixel-dialog-box pixel-wish-success">
              <p className="pixel-success-text">{cakeSection.wishedText}</p>
              <button
                className="btn-pixel-subtle"
                onClick={handleRelight}
                style={{ marginTop: "12px" }}
              >
                <RotateCcw size={15} />
                <span>Thắp nến ước lại nè ✨</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
