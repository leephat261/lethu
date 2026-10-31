import { useEffect } from "react";
import { triggerGiftUnwrapConfetti } from "../utils/confettiHelper";
export const GiftUnwrapEffect = ({ onComplete }) => {
 useEffect(() => { const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches; if(!reduced)triggerGiftUnwrapConfetti(); const timer=setTimeout(onComplete,reduced?0:1400);return ()=>clearTimeout(timer); },[onComplete]);
 return <div className="pixel-unwrap-overlay" aria-live="polite"><img className="unwrap-cat" src="/assets/crisp/icons/cat.svg" alt="" /><div className="crisp-dialog"><h2>Mở một chút niềm vui…</h2><p>Món quà bí mật dành cho Ma feng đã được mở! 🌻</p></div></div>;
};
