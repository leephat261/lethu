import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { birthdayConfig } from "../data/birthdayConfig";
import { triggerWishBlownConfetti } from "../utils/confettiHelper";
export const MakeAWishCake = () => {
 const { cakeSection } = birthdayConfig; const [isBlown,setIsBlown]=useState(false);
 const blow=()=>{if(!isBlown){setIsBlown(true);triggerWishBlownConfetti();}};
 return <section className="pixel-cake-section" id="section-cake" aria-labelledby="cake-title">
 <div className="section-header"><span className="pixel-badge"><img src="/assets/crisp/icons/star.svg" alt="" />MỘT ĐIỀU ƯỚC NHỎ</span><h2 className="section-title" id="cake-title">{cakeSection.title}</h2><p className="section-subtitle">{cakeSection.subtitle}</p></div>
 <div className="pixel-card pixel-cake-card"><span className="cake-doodle-label">a wish, a smile & a little strawberry cake</span><button className="pixel-cake-stage" onClick={blow} aria-label={isBlown?"Nến đã tắt":"Chạm để thổi nến"} disabled={isBlown}><img className="pixel-cake-img" src={"/assets/crisp/icons/cake-"+(isBlown?"wished":"lit")+".svg"} alt={isBlown?"Bánh dâu với ngọn nến đã tắt":"Bánh dâu với ngọn nến đang cháy"} loading="lazy" /></button>
 <div aria-live="polite">{!isBlown?<button className="btn-pixel-primary" id="btn-blow-candle" onClick={blow}>{cakeSection.buttonText}</button>:<div className="pixel-wish-success"><p className="pixel-success-text">{cakeSection.wishedText}</p><button className="btn-pixel-subtle" onClick={()=>setIsBlown(false)}><RotateCcw size={16} aria-hidden="true" />Thắp nến ước lại nè ✨</button></div>}</div><p className="cake-footnote">Cứ ước đi, những điều đẹp đẽ đang trên đường tới.</p></div></section>;
};
