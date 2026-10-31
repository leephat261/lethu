import { RotateCcw } from "lucide-react";
import { birthdayConfig } from "../data/birthdayConfig";

export const FinalLetter = ({ onReplay }) => {
  const { finalLetter, recipient } = birthdayConfig;

  return (
    <section className="pixel-final-letter-section" id="section-letter" style={{ width: "100%" }}>
      {/* Tấm thiệp niêm phong Pixel */}
      <div className="pixel-card pixel-letter-card">
        {/* Dấu sáp niêm phong Pixel Seal */}
        <div className="pixel-wax-seal" aria-hidden="true">
          <div className="pixel-seal-inner">
            <span>{finalLetter.waxSealText || "FOR FEN"}</span>
          </div>
        </div>

        <h3 className="pixel-letter-title">
          {finalLetter.letterTitle}
        </h3>

        <img className="letter-tea" src="/assets/crisp/icons/tea.svg" alt="" />
        {/* Nội dung bức thư */}
        <div className="pixel-letter-body">
          {finalLetter.body.map((p, index) => (
            <p key={index} className="pixel-letter-p">
              {p}
            </p>
          ))}
        </div>

        {/* Lời chúc và người gửi */}
        <div className="pixel-letter-closing">
          <div className="closing-quote">{finalLetter.closing}</div>
          <div className="closing-sender">— {finalLetter.sender} —</div>
        </div>
      </div>

      {/* Nút xem lại từ đầu */}
      <div className="pixel-replay-box">
        <button
          className="btn-pixel-primary"
          onClick={onReplay}
          id="btn-replay"
        >
          <RotateCcw size={16} />
          <span>{finalLetter.replayButtonText || "XEM LẠI TỪ ĐẦU 🔄"}</span>
        </button>

        <div className="pixel-footer-credit">
          <span>Gửi tặng {recipient.name} ({recipient.nickname}) từ những người bạn tuyệt vời 🌻✨</span>
        </div>
      </div>
    </section>
  );
};
