import React, { useEffect } from "react";
import { triggerGiftUnwrapConfetti } from "../utils/confettiHelper";
import { audioManager } from "../utils/audioSynth";

export const GiftUnwrapEffect = ({ onComplete }) => {
  useEffect(() => {
    // 1. Kích hoạt phát nhạc nền
    audioManager.play();

    // 2. Kích hoạt pháo hoa giấy Confetti pastel đa sắc rực rỡ
    triggerGiftUnwrapConfetti();

    // 3. Sau khi chạy hiệu ứng unboxing, chuyển sang nội dung chính
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="pixel-unwrap-overlay" aria-live="polite">
      {/* Hộp quà Pixel mở nắp */}
      <div className="pixel-giftbox-opened">
        <div className="pixel-box-lid opened" />
        <div className="pixel-box-body">
          <span className="body-stripe-v" />
          <span className="body-stripe-h" />
          {/* Luồng ánh sáng Pixel bừng tỏa từ bên trong */}
          <div className="pixel-light-beam" />
        </div>
      </div>

      {/* Thông điệp cấp độ mới / mở khóa thành công */}
      <div className="pixel-dialog-box" style={{ marginTop: "24px", maxWidth: "340px" }}>
        <h2 className="pixel-dialog-heading">
          ✨ UNLOCKED! ✨
        </h2>
        <p style={{ color: "var(--text-body)", fontSize: "0.95rem", marginTop: "6px" }}>
          Món quà bí mật dành cho Ma feng đã được mở! 🌻
        </p>
      </div>
    </div>
  );
};
