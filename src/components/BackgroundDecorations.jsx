import React, { useEffect, useState } from "react";

export const BackgroundDecorations = () => {
  const [clickSparks, setClickSparks] = useState([]);

  // Hiệu ứng ánh sáng tự nhiên khi chạm/click vào màn hình
  useEffect(() => {
    const handleTouchOrClick = (e) => {
      const x = e.clientX || (e.touches && e.touches[0]?.clientX);
      const y = e.clientY || (e.touches && e.touches[0]?.clientY);

      if (!x || !y) return;

      const newSpark = {
        id: Date.now() + Math.random(),
        x,
        y,
        color: ["#f0cb69", "#d9758f", "#8ebf9e", "#ffffff"][Math.floor(Math.random() * 4)],
        symbol: ["✦", "🌸", "·", "✨"][Math.floor(Math.random() * 4)],
      };

      setClickSparks((prev) => [...prev.slice(-6), newSpark]);

      setTimeout(() => {
        setClickSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, 650);
    };

    window.addEventListener("click", handleTouchOrClick);
    window.addEventListener("touchstart", handleTouchOrClick, { passive: true });

    return () => {
      window.removeEventListener("click", handleTouchOrClick);
      window.removeEventListener("touchstart", handleTouchOrClick);
    };
  }, []);

  return (
    <>
      <div className="handcrafted-pixel-scenery" aria-hidden="true">
        {/* =================================================================
            PHƯƠNG ÁN 1: FREE SUMMER PIXEL ART BACKGROUNDS (CRAFTPIX STYLE)
            LỚP 0: BẦU TRỜI HÈ XANH NGẮT & KHÍ QUYỂN (SUMMER AZURE SKY)
            Asset: /assets/summer-sky.svg
            ================================================================= */}
        <div className="scenery-layer layer-summer-sky">
          <img
            src="/assets/summer-sky.svg"
            alt="CraftPix Summer Sky"
            className="summer-sky-img"
            loading="eager"
          />
        </div>

        {/* =================================================================
            LỚP 1: DÃY NÚI XA MÙ SƯƠNG 3 TẦNG (DISTANT SUMMER MOUNTAINS)
            Asset: /assets/summer-mountains.svg
            ================================================================= */}
        <div className="scenery-layer layer-distant-mountains">
          <img
            src="/assets/summer-mountains.svg"
            alt="CraftPix Distant Mountains"
            className="distant-mountains-img"
            loading="eager"
          />
        </div>

        {/* =================================================================
            LỚP 2: CỤM MÂY TRẮNG HÈ CUỘN KHỐI BỒNG BỀNH (CUMULUS SUMMER CLOUDS)
            Asset: /assets/summer-clouds.svg
            ================================================================= */}
        <div className="scenery-layer layer-giant-cloud">
          <img
            src="/assets/summer-clouds.svg"
            alt="CraftPix Summer Clouds"
            className="giant-pixel-cloud-img"
            loading="eager"
          />
        </div>

        {/* Các đám mây nhỏ trôi lững lờ cực chậm */}
        <div className="scenery-layer layer-drifting-clouds">
          <div className="pixel-drift-cloud cloud-slow-1">
            <svg width="120" height="48" viewBox="0 0 120 48" shapeRendering="crispEdges">
              <rect x="20" y="24" width="80" height="20" fill="#a0bbd8" />
              <rect x="15" y="18" width="85" height="20" fill="#d9e6f4" />
              <rect x="25" y="8" width="55" height="20" fill="#ffffff" />
              <rect x="30" y="4" width="40" height="10" fill="#fffdf2" />
            </svg>
          </div>
          <div className="pixel-drift-cloud cloud-slow-2">
            <svg width="90" height="36" viewBox="0 0 90 36" shapeRendering="crispEdges">
              <rect x="15" y="18" width="60" height="15" fill="#a0bbd8" />
              <rect x="10" y="12" width="65" height="16" fill="#d9e6f4" />
              <rect x="20" y="4" width="40" height="16" fill="#ffffff" />
            </svg>
          </div>
        </div>

        {/* =================================================================
            LỚP 3: ĐÀN CHIM TRẮNG BAY XA TRONG GIÓ
            ================================================================= */}
        <div className="scenery-layer layer-birds">
          <div className="pixel-bird-group">
            <div className="bird-item bi-1">
              <svg width="14" height="8" viewBox="0 0 14 8" shapeRendering="crispEdges">
                <rect x="0" y="2" width="3" height="2" fill="#ffffff" />
                <rect x="3" y="0" width="3" height="2" fill="#ffffff" />
                <rect x="6" y="2" width="2" height="4" fill="#ffffff" />
                <rect x="8" y="0" width="3" height="2" fill="#ffffff" />
                <rect x="11" y="2" width="3" height="2" fill="#ffffff" />
              </svg>
            </div>
            <div className="bird-item bi-2">
              <svg width="11" height="6" viewBox="0 0 14 8" shapeRendering="crispEdges">
                <rect x="0" y="2" width="3" height="2" fill="#ffffff" opacity="0.85" />
                <rect x="3" y="0" width="3" height="2" fill="#ffffff" opacity="0.85" />
                <rect x="6" y="2" width="2" height="4" fill="#ffffff" opacity="0.85" />
                <rect x="8" y="0" width="3" height="2" fill="#ffffff" opacity="0.85" />
                <rect x="11" y="2" width="3" height="2" fill="#ffffff" opacity="0.85" />
              </svg>
            </div>
            <div className="bird-item bi-3">
              <svg width="8" height="5" viewBox="0 0 14 8" shapeRendering="crispEdges">
                <rect x="0" y="2" width="3" height="2" fill="#ffffff" opacity="0.7" />
                <rect x="3" y="0" width="3" height="2" fill="#ffffff" opacity="0.7" />
                <rect x="6" y="2" width="2" height="4" fill="#ffffff" opacity="0.7" />
                <rect x="8" y="0" width="3" height="2" fill="#ffffff" opacity="0.7" />
                <rect x="11" y="2" width="3" height="2" fill="#ffffff" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>

        {/* =================================================================
            LỚP 4: CÁNH HOA DẠI VÀ PHẤN HOA BAY LƯỚT NHẸ TRONG LÀN GIÓ
            ================================================================= */}
        <div className="scenery-layer layer-wind-petals">
          <div className="pixel-petal p-1" />
          <div className="pixel-petal p-2" />
          <div className="pixel-petal p-3" />
          <div className="pixel-petal p-4" />
          <div className="pixel-petal p-5" />
          <div className="pixel-petal p-6" />
        </div>

        {/* =================================================================
            LỚP 5: TRIỀN ĐỒI THẢO NGUYÊN HÈ, HÀNG RÀO GỖ, CHÚ CÚN SHIBA & HOA DẠI
            Asset: /assets/summer-meadow.svg (CraftPix Summer Meadow)
            ================================================================= */}
        <div className="scenery-layer layer-meadow-hills">
          <img
            src="/assets/summer-meadow.svg"
            alt="CraftPix Summer Meadow with Wildflowers and Shiba"
            className="meadow-hills-img"
            loading="eager"
          />
        </div>

        {/* =================================================================
            LỚP 6: TIỀN CẢNH GẦN (FOREGROUND CORNER GREENS)
            Tạo cảm giác người xem đang đứng bên trong khung cảnh
            ================================================================= */}
        <div className="scenery-layer layer-foreground-corners">
          <div className="fg-grass-corner fg-left">
            <div className="tall-blade tb-1" />
            <div className="tall-blade tb-2" />
            <div className="tall-blade tb-3" />
            <div className="fg-flower fl-fg-1" />
          </div>
          <div className="fg-grass-corner fg-right">
            <div className="tall-blade tb-4" />
            <div className="tall-blade tb-5" />
            <div className="tall-blade tb-6" />
            <div className="fg-flower fl-fg-2" />
          </div>
        </div>
      </div>

      {/* Hiệu ứng tia sáng tự nhiên khi chạm màn hình */}
      {clickSparks.map((spark) => (
        <div
          key={spark.id}
          className="pixel-natural-spark"
          style={{
            left: spark.x,
            top: spark.y,
            color: spark.color,
          }}
        >
          {spark.symbol}
        </div>
      ))}
    </>
  );
};
