import confetti from "canvas-confetti";

/**
 * Hiệu ứng pháo hoa giấy Confetti với bảng màu Thiên nhiên đa sắc (Xanh trời, Vàng nắng, Xanh lá, Trắng mây & Hồng hoa dại)
 */
export const triggerGiftUnwrapConfetti = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const count = 85;
  const defaults = {
    origin: { y: 0.68 },
    disableForReducedMotion: true,
    colors: ["#e7a6ba", "#c0d2b2", "#efd19a", "#f4ced9", "#fffaf4"],
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Đợt 1: Bắn bung rộng
  fire(0.25, {
    spread: 30,
    startVelocity: 55,
  });

  // Đợt 2: Tỏa tròn như hoa nở
  fire(0.2, {
    spread: 60,
  });

  // Đợt 3: Bay cao lên bầu trời
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.85,
  });

  // Đợt 4: Mưa hạt nhẹ
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.1,
  });

  // Đợt 5: Sao và cánh hoa rơi chậm
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

/**
 * Hiệu ứng pháo sao nhẹ nhàng khi thổi tắt nến
 */
export const triggerWishBlownConfetti = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const end = Date.now() + 850;
  const colors = ["#e7a6ba", "#c0d2b2", "#efd19a", "#fffaf4"];

  (function frame() {
    confetti({
      particleCount: 2,
      disableForReducedMotion: true,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      disableForReducedMotion: true,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
