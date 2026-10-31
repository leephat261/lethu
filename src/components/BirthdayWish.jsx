import React from "react";
import { Sparkles, Calendar } from "lucide-react";
import { birthdayConfig } from "../data/birthdayConfig";

export const BirthdayWish = () => {
  const { recipient, wishCard } = birthdayConfig;

  return (
    <section className="pixel-wish-container" id="section-wish">
      {/* Tiêu đề phần */}
      <div className="section-header">
        <span className="pixel-badge">
          <Sparkles size={13} />
          {recipient.zodiac || "THIÊN BÌNH ♎"}
        </span>
        <h2 className="section-title">
          Gửi {recipient.name} 🌻
        </h2>
        <p className="section-subtitle">
          [{recipient.nickname}]
        </p>
      </div>

      {/* Tấm thiệp RPG Pixel Card */}
      <div className="pixel-card pixel-wish-card">
        {/* Miếng băng dính Pixel dán trên đầu */}
        <div className="pixel-tape" />

        {/* Con tem bưu điện Pixel Stamp */}
        <div className="pixel-stamp" aria-hidden="true">
          <div className="pixel-stamp-inner">
            <span className="stamp-icon">🐾</span>
            <span className="stamp-text">FEN</span>
          </div>
        </div>

        {/* Badge ngày sinh nhật */}
        <div className="pixel-date-badge">
          <Calendar size={13} />
          <span>{recipient.birthDate}</span>
        </div>

        {/* Tiêu đề tấm thiệp */}
        <h3 className="pixel-wish-heading">
          {wishCard.heading}
        </h3>

        {/* Lời mở đầu viết tay */}
        <div className="pixel-handwritten-greeting">
          {wishCard.handwrittenGreeting}
        </div>

        {/* Nội dung lời chúc */}
        <div className="pixel-wish-body">
          {wishCard.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="pixel-body-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Chữ ký tình bạn chân thành */}
        <div className="pixel-signature">
          {wishCard.signature}
        </div>
      </div>
    </section>
  );
};
