import React from "react";
import { Volume2, Sparkles } from "lucide-react";
import { birthdayConfig } from "../data/birthdayConfig";

export const InvitationSection = ({ onOpenGift }) => {
  const { invitation, recipient } = birthdayConfig;

  return (
    <div className="pixel-invitation-container">
      {/* Huy hiệu Pixel trên cùng */}
      <div className="pixel-top-badge">
        <span className="pixel-badge">
          <Sparkles size={13} />
          {recipient.ageBadge || "SPECIAL DAY • 21.10"}
        </span>
      </div>

      {/* Tiêu đề chính */}
      <h1 className="pixel-invitation-title">
        {invitation.mainTitle}
      </h1>

      {/* Khung đối thoại RPG Pixel mộc mạc */}
      <div className="pixel-dialog-box">
        <div className="dialog-corner dc-tl" />
        <div className="dialog-corner dc-tr" />
        <div className="dialog-corner dc-bl" />
        <div className="dialog-corner dc-br" />
        
        <p className="pixel-dialog-text">
          {invitation.message}
        </p>
      </div>

      {/* Rương quà thủ công gỗ mộc & ruy băng vải hoa dại */}
      <div
        className="pixel-giftbox-wrapper"
        onClick={onOpenGift}
        role="button"
        tabIndex={0}
        aria-label="Chạm để mở hộp quà Pixel"
      >
        <img
          src="/assets/ui-giftbox.svg"
          alt="Handcrafted Wooden Gift Box"
          className="pixel-giftbox-asset"
          loading="eager"
        />

        {/* Ngôi sao Pixel nhẹ nhàng bay quanh */}
        <div className="pixel-spark-decor ps-1">✦</div>
        <div className="pixel-spark-decor ps-2">★</div>
        <div className="pixel-spark-decor ps-3">✦</div>
      </div>

      {/* Nút bấm mở quà phong cách Retro mộc mạc */}
      <button
        className="btn-pixel-primary"
        onClick={onOpenGift}
        id="btn-open-gift"
      >
        <span>🎁</span>
        <span>{invitation.openButtonText}</span>
      </button>

      {/* Gợi ý âm thanh kiểu Retro HUD */}
      <div className="pixel-sound-hint">
        <Volume2 size={15} />
        <span>{invitation.hintText}</span>
      </div>
    </div>
  );
};
