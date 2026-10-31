import React, { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { birthdayConfig } from "../data/birthdayConfig";

export const LightboxModal = ({ activeIndex, onClose, onNavigate }) => {
  const { memories } = birthdayConfig;
  const currentItem = memories[activeIndex];
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Điều khiển bằng phím
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    const prevIndex = (activeIndex - 1 + memories.length) % memories.length;
    onNavigate(prevIndex);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    const nextIndex = (activeIndex + 1) % memories.length;
    onNavigate(nextIndex);
  };

  // Cảm ứng vuốt trên mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  if (!currentItem) return null;

  return (
    <div
      className="pixel-lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="pixel-lightbox-modal"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Nút đóng pixel retro */}
        <button
          className="pixel-lightbox-close"
          onClick={onClose}
          aria-label="Đóng xem ảnh"
        >
          <X size={18} />
        </button>

        {/* Khung ảnh chính sắc nét */}
        <div className="pixel-lightbox-viewport">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="pixel-lightbox-img"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            className="pixel-lightbox-fallback"
            style={{ display: "none" }}
          >
            <span style={{ fontSize: "2.5rem" }}>🌻</span>
            <h4 style={{ color: "var(--pixel-dark)", marginTop: "8px" }}>{currentItem.title}</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "4px" }}>
              (Thêm ảnh thật vào {currentItem.image})
            </p>
          </div>

          {/* Nút lùi ảnh pixel */}
          <button
            className="pixel-nav-btn pixel-nav-prev"
            onClick={handlePrev}
            aria-label="Ảnh trước"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Nút tiến ảnh pixel */}
          <button
            className="pixel-nav-btn pixel-nav-next"
            onClick={handleNext}
            aria-label="Ảnh kế tiếp"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Thanh thông tin & Caption kiểu Game HUD */}
        <div className="pixel-lightbox-footer">
          <div className="pixel-lightbox-info">
            <h4 className="pixel-lightbox-title">{currentItem.title}</h4>
            <p className="pixel-lightbox-desc">{currentItem.caption}</p>
          </div>
          <div className="pixel-lightbox-counter">
            [ {activeIndex + 1} / {memories.length} ]
          </div>
        </div>
      </div>
    </div>
  );
};
