/**
 * =========================================================================
 * FILE CẤU HÌNH DỮ LIỆU SINH NHẬT - TẤT CẢ NỘI DUNG ĐỀU CHỈNH SỬA TẠI ĐÂY
 * =========================================================================
 */

export const birthdayConfig = {
  // 1. THÔNG TIN NGƯỜI NHẬN
  recipient: {
    name: "Nguyễn Lê Anh Thư", // Tên của cô bạn
    nickname: "Ma feng", // Biệt danh thân mật
    birthDate: "21 tháng 10", // Ngày sinh nhật
    zodiac: "Thiên Bình ♎ THÁNG 10!", // Cung hoàng đạo
    ageBadge: "Happy Birthday Fen ✨",
  },

  // 2. NHẠC NỀN
  music: {
    src: "/music/birthday-song.mp3",
    title: "Paris in the Rain • Lofi Melodic",
    artist: "Happy Birthday Fen",
    useBuiltInSynthFallback: true,
  },

  // 3. MÀN HÌNH 1 — LỜI MỜI MỞ QUÀ
  invitation: {
    subTitle: "Một món quà nhỏ gửi đến",
    mainTitle: "Happy Birthday Ma Feng! 🌸",
    message: "Hôm nay là một ngày thật đặc biệt giữa bầu trời xanh và cánh đồng hoa rực rỡ. Có một chiếc hộp kỳ diệu đang chờ fen khám phá nè...",
    openButtonText: "MỞ QUÀ NGAY NÈ ✨",
    hintText: "(Bật âm lượng lên để nghe giai điệu sinh nhật nha 🎵)",
  },

  // 4. MÀN HÌNH 3 — THIỆP CHÚC MỪNG SINH NHẬT
  wishCard: {
    badge: "Special Day • 21.10",
    heading: "Happy Birthday Our Sweet Girl!",
    handwrittenGreeting: "Gửi Thư - Ma feng đáng yêu,",
    paragraphs: [
      "Chúc Thư bước sang tuổi mới luôn luôn xinh đẹp, mạnh mẽ, rạng rỡ và ngập tràn hạnh phúc trong từng khoảnh khắc.",
      "Mong cho mọi dự định và ước mơ của fen đều sẽ sớm thành hiện thực rực rỡ như bầu trời xanh ngát hôm nay. Dù phía trước có thử thách nào, hãy nhớ rằng tụi tui luôn ở đây ủng hộ fen hết mình!",
      "Cảm ơn vì đã luôn là một người bạn tuyệt vời, mang đến thật nhiều tiếng cười và năng lượng tích cực cho mọi người xung quanh. Happy Birthday Thư nha! 🎂🌻",
    ],
    signature: "From your best friends with love 🐾✨",
  },

  // 5. MÀN HÌNH 4 — ALBUM KỶ NIỆM (POLAROID SCRAPBOOK)
  memories: [
    {
      id: 1,
      image: "/images/img1.jpg",
      title: "Nụ cười rạng rỡ",
      caption: "Mỗi lần fen cười là cả ngày bừng sáng như nắng sớm ✨",
      tag: "Memory #01",
      rotation: "-1.5deg",
    },
    {
      id: 2,
      image: "/images/img2.jpg",
      title: "Chiếc bánh ngọt ngào",
      caption: "Thêm một tuổi mới với thật nhiều niềm vui và bất ngờ 🍰",
      tag: "Memory #02",
      rotation: "2deg",
    },
    {
      id: 3,
      image: "/images/img3.jpg",
      title: "Đồng hành cùng nhau",
      caption: "Giống như cô bạn cùng chú cún nhỏ giữa cánh đồng hoa vậy đó 🐾",
      tag: "Memory #03",
      rotation: "-1deg",
    },
    {
      id: 4,
      image: "/images/img4.jpg",
      title: "Cánh đồng hoa nở rộ",
      caption: "Chúc fen luôn tỏa sáng và tươi tắn như những đóa hoa mùa hạ 🌸",
      tag: "Memory #04",
      rotation: "2deg",
    },
    {
      id: 5,
      image: "/images/img5.jpg",
      title: "Những buổi hẹn cà phê",
      caption: "Cùng nhau ngồi tâm sự chuyện trên trời dưới đất không biết chán ☕",
      tag: "Memory #05",
      rotation: "-2deg",
    },
    {
      id: 6,
      image: "/images/img6.jpg",
      title: "Dưới bầu trời xanh",
      caption: "Bầu trời rộng lớn phía trước đang chờ fen khám phá thật nhiều điều kỳ diệu ☁️",
      tag: "Memory #06",
      rotation: "1.5deg",
    },
  ],

  // 6. MÀN HÌNH 5 — CHIẾC BÁNH KEM ƯỚC NGUYỆN
  cakeSection: {
    title: "Cùng thổi nến sinh nhật nha! 🎂",
    subtitle: "Nhắm mắt lại, ước một điều thật tuyệt vời rồi chạm vào ngọn nến nhé!",
    buttonText: "THỔI NẾN ƯỚC NGUYỆN 🕯️",
    wishedText: "✨ Ước mơ của fen nhất định sẽ thành hiện thực rực rỡ! ✨",
  },

  // 7. MÀN HÌNH 6 — LÁ THƯ CUỐI (FINAL LETTER)
  finalLetter: {
    letterTitle: "Mini letter for you 💌",
    waxSealText: "FOR FEN",
    sender: "Tụi tui — Những người bạn luôn bên cạnh fen",
    body: [
      "Thư à,",
      "Có một người bạn chân thành, đáng yêu và luôn hết mình như fen là một điều cực kỳ may mắn với tụi tui.",
      "Tuổi mới đến rồi, hãy cứ tự tin bước đi trên con đường fen đã chọn, ăn những món ngon, đi đến những vùng đất mới, và luôn giữ trọn nụ cười hồn nhiên trên môi.",
      "Mong fen một đời bình an, nhiều niềm vui và luôn được bao bọc bởi những điều ấm áp nhất. Sinh nhật thật hạnh phúc nha Ma feng!",
    ],
    closing: "Mãi rực rỡ và luôn vui vẻ nhé! 🌻✨",
    replayButtonText: "XEM LẠI TỪ ĐẦU 🔄",
  },
};
