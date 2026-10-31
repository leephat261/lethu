import { useState, useCallback, useEffect } from "react";
import { Heart } from "lucide-react";
import { audioManager } from "./utils/audioSynth";
import { birthdayConfig } from "./data/birthdayConfig";
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
    audioManager.init(birthdayConfig.music.src, birthdayConfig.music.useBuiltInSynthFallback);
    void audioManager.play();
    setJourneyStage("unwrapping");
  };

  // Khi hiệu ứng mở quà kết thúc
  const handleUnwrapComplete = useCallback(() => {
    setJourneyStage("celebration");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  useEffect(() => () => audioManager.pause(), []);

  // Xem lại từ đầu
  const handleReplay = () => {
    audioManager.pause();
    setActivePhotoIndex(null);
    setJourneyStage("invitation");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="app-container">
      {/* Nền trang trí: Trái tim bay, cánh hoa rơi, hạt ánh sáng chạm màn hình */}
      <BackgroundDecorations />
      <header className="site-header"><span className="site-wordmark"><img src="/assets/crisp/icons/flower.svg" alt="" />a little gift for you</span><span className="site-date"><Heart size={13} aria-hidden="true" />21 . 10</span></header>

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
          <nav className="journey-nav" aria-label="Các phần trong thiệp"><a href="#section-wish">Lời chúc</a><span>·</span><a href="#section-gallery">Kỷ niệm</a><span>·</span><a href="#section-cake">Ước nguyện</a><span>·</span><a href="#section-letter">Lá thư</a></nav>
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

      {journeyStage === "invitation" && <footer className="invitation-footer">Một ngày đặc biệt. Một người thật đặc biệt.<span>made with love, just for Fen</span></footer>}
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
