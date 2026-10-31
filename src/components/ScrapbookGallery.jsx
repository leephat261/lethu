import { useState } from "react";
import { Camera } from "lucide-react";
import { birthdayConfig } from "../data/birthdayConfig";

// Các thẻ minh họa 2D Pixel Nature cho từng placeholder
const PIXEL_PLACEHOLDER_THEMES = [
  {
    icon: "🌻",
    title: "Hoa hướng dương",
    bg: "linear-gradient(180deg, #fef08a 0%, #fde047 100%)",
    borderColor: "#eab308",
    badge: "Đồng hoa mùa hạ",
  },
  {
    icon: "🍰",
    title: "Bánh sinh nhật",
    bg: "linear-gradient(180deg, #fed7aa 0%, #fdba74 100%)",
    borderColor: "#f97316",
    badge: "Tuổi mới ngọt ngào",
  },
  {
    icon: "🐾",
    title: "Bạn đồng hành",
    bg: "linear-gradient(180deg, #dcfce7 0%, #bbf7d0 100%)",
    borderColor: "#22c55e",
    badge: "Chú cún shiba nhỏ",
  },
  {
    icon: "🌸",
    title: "Hoa cánh bướm",
    bg: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 100%)",
    borderColor: "#ec4899",
    badge: "Triền đồi ngát hương",
  },
  {
    icon: "☕",
    title: "Quán quen bình yên",
    bg: "linear-gradient(180deg, #e0e7ff 0%, #c7d2fe 100%)",
    borderColor: "#6366f1",
    badge: "Tách trà buổi chiều",
  },
  {
    icon: "☁️",
    title: "Bầu trời xanh ngát",
    bg: "linear-gradient(180deg, #bae6fd 0%, #7dd3fc 100%)",
    borderColor: "#0284c7",
    badge: "Chân trời phía trước",
  },
];

export const ScrapbookGallery = ({ onSelectPhoto }) => {
  const { memories } = birthdayConfig;
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="pixel-gallery-container" id="section-gallery">
      <div className="section-header">
        <span className="pixel-badge">
          <Camera size={13} />
          PHOTO LOG • ALBUM
        </span>
        <h2 className="section-title">
          Kỷ Niệm Của Chúng Mình 📸
        </h2>
        <p className="section-subtitle">
          Chạm vào từng khung ảnh để xem ảnh rõ nét nha
        </p>
      </div>

      <div className="pixel-scrapbook-grid">
        {memories.map((item, index) => {
          const theme = PIXEL_PLACEHOLDER_THEMES[index % PIXEL_PLACEHOLDER_THEMES.length];
          const isFailed = failedImages[item.id] || !item.image;

          return (
            <div
              key={item.id}
              className="pixel-polaroid-frame"
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelectPhoto(index); } }}
              style={{
                transform: `rotate(${item.rotation || "0deg"})`,
              }}
              onClick={() => onSelectPhoto(index)}
              role="button"
              tabIndex={0}
              aria-label={`Xem ảnh: ${item.title}`}
            >
              {/* Băng dính Pixel dán góc */}
              <div className="pixel-tape-corner" />

              {/* Khung chứa ảnh - Giữ trọn độ nét ảnh gốc của người dùng */}
              <div className="pixel-photo-window">
                {!isFailed ? (
                  <img
                    src={item.thumbnail || item.image}
                    alt={item.title}
                    className="pixel-real-photo"
                    loading="lazy"
                    decoding="async"
                    width="480" height="600"
                    onError={() => handleImageError(item.id)}
                  />
                ) : (
                  <div
                    className="pixel-nature-placeholder"
                    
                  >
                    <img className="pixel-theme-icon" src="/assets/crisp/icons/flower.svg" alt="" />
                    <div className="pixel-placeholder-name">{item.title}</div>
                    <div className="pixel-placeholder-tag">{theme.badge}</div>
                  </div>
                )}
              </div>

              {/* Tag nhãn Pixel & Caption */}
              <div className="pixel-polaroid-footer">
                <span className="pixel-tag-pill">{item.tag}</span>
                <p className="pixel-polaroid-caption">{item.caption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
