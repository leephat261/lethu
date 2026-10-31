import React, { useState } from "react";
import { BackgroundDecorations } from "./components/BackgroundDecorations";
import { MusicPlayer } from "./components/MusicPlayer";
import { InvitationSection } from "./components/InvitationSection";
import { GiftUnwrapEffect } from "./components/GiftUnwrapEffect";
import { BirthdayWish } from "./components/BirthdayWish";
import { ScrapbookGallery } from "./components/ScrapbookGallery";
import { LightboxModal } from "./components/LightboxModal";
import { MakeAWishCake } from "./components/MakeAWishCake";
import { FinalLetter } from "./components/FinalLetter";

import "./styles/main.css";
import "./styles/components.css";
import "./styles/mobile.css";

export function App() {
  // Trạng thái hành trình: 'invitation' -> 'unwrapping' -> 'celebration'
  const [journeyStage, setJourneyStage] = useState("invitation");
  
  // Trạng thái modal xem ảnh phóng to (Lightbox)
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  // Khi người dùng bấm Mở quà
  const handleOpenGift = () => {
    setJourneyStage("unwrapping");
  };

  // Khi hiệu ứng mở quà kết thúc
  const handleUnwrapComplete = () => {
    setJourneyStage("celebration");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Xem lại từ đầu
  const handleReplay = () => {
    setJourneyStage("invitation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-container">
      {/* Nền trang trí: Trái tim bay, cánh hoa rơi, hạt ánh sáng chạm màn hình */}
      <BackgroundDecorations />

      {/* Giai đoạn 1: Màn hình lời mời */}
      {journeyStage === "invitation" && (
        <div className="content-wrapper">
          <InvitationSection onOpenGift={handleOpenGift} />
        </div>
      )}

      {/* Giai đoạn 2: Animation mở hộp quà & pháo giấy */}
      {journeyStage === "unwrapping" && (
        <GiftUnwrapEffect onComplete={handleUnwrapComplete} />
      )}

      {/* Giai đoạn 3: Toàn bộ hành trình kỷ niệm & sinh nhật */}
      {journeyStage === "celebration" && (
        <>
          <div className="content-wrapper" style={{ animation: "slideUpFade 0.6s ease-out" }}>
            {/* Màn hình 3: Thiệp chúc mừng sinh nhật */}
            <BirthdayWish />

            {/* Màn hình 4: Album Polaroid Scrapbook */}
            <ScrapbookGallery
              onSelectPhoto={(index) => setActivePhotoIndex(index)}
            />

            {/* Màn hình 5: Thổi nến ước nguyện */}
            <MakeAWishCake />

            {/* Màn hình 6: Lá thư cuối & Nút xem lại */}
            <FinalLetter onReplay={handleReplay} />
          </div>

          {/* Mini Music Player cố định góc màn hình */}
          <MusicPlayer />
        </>
      )}

      {/* Lightbox phóng to xem ảnh */}
      {activePhotoIndex !== null && (
        <LightboxModal
          activeIndex={activePhotoIndex}
          onClose={() => setActivePhotoIndex(null)}
          onNavigate={(newIndex) => setActivePhotoIndex(newIndex)}
        />
      )}
    </div>
  );
}

export default App;
