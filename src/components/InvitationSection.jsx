import { ArrowRight, Volume2 } from "lucide-react";
import { birthdayConfig } from "../data/birthdayConfig";
export const InvitationSection = ({ onOpenGift }) => {
 const { invitation, recipient } = birthdayConfig;
 return <section className="invitation-layout" aria-labelledby="invitation-title">
  <div className="invitation-copy">
   <span className="little-label"><img src="/assets/crisp/icons/heart.svg" alt="" />{recipient.ageBadge}</span>
   <p className="invitation-kicker">{invitation.subTitle}</p><h1 id="invitation-title">{invitation.mainTitle}</h1>
   <div className="invitation-note crisp-dialog"><p>{invitation.message}</p></div>
   <div className="invitation-actions"><button className="btn-pixel-primary" onClick={onOpenGift} id="btn-open-gift"><span>{invitation.openButtonText}</span><ArrowRight size={19} aria-hidden="true" /></button><p className="sound-hint"><Volume2 size={16} aria-hidden="true" />{invitation.hintText}</p></div>
  </div>
  <button className="gift-scene" onClick={onOpenGift} aria-label="Chạm để mở món quà sinh nhật">
   <span className="scene-topline">bưu kiện yêu thương</span><span className="scene-frame"><img className="scene-cat" src="/assets/crisp/icons/cat.svg" alt="Chú mèo nhỏ mang lời chúc sinh nhật" fetchPriority="high" /><img className="scene-heart" src="/assets/crisp/icons/heart.svg" alt="" /><img className="scene-star" src="/assets/crisp/icons/star.svg" alt="" /><img className="scene-strawberry" src="/assets/crisp/icons/strawberry.svg" alt="" /><img className="scene-flower" src="/assets/crisp/icons/flower.svg" alt="" /></span><span className="scene-recipient">gửi {recipient.nickname}, với thật nhiều thương mến</span><span className="scene-touch">chạm nhẹ để mở nhé</span>
  </button>
 </section>;
};
