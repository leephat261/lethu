/**
 * =========================================================================
 * FILE CẤU HÌNH DỮ LIỆU SINH NHẬT - TẤT CẢ NỘI DUNG ĐỀU CHỈNH SỬA TẠI ĐÂY
 * =========================================================================
 */

export const birthdayConfig = {
  // 1. THÔNG TIN NGƯỜI NHẬN
  recipient: {
    name: "Nguyễn Lê Anh Thư", // Tên của cô bạn
    nickname: "Little f*cking cat mèo meo here we come !", // Biệt danh thân mật
    birthDate: "21 tháng 10", // Ngày sinh nhật
    zodiac: "Thiên Bình ♎ THÁNG 10!", // Cung hoàng đạo
    ageBadge: "Happy Birthday NGUYỄN LÊ ANH THƯ ✨",
  },

  // 2. NHẠC NỀN
  music: {
    src: "", // Built-in music box. Set to "/music/birthday-song.mp3" after adding a licensed MP3.
    title: "Miracle day",
    artist: "Happy Birthday Fen",
    useBuiltInSynthFallback: true,
  },

  // 3. MÀN HÌNH 1 — LỜI MỜI MỞ QUÀ
  invitation: {
    subTitle: "Một món quà nhỏ gửi đến fen",
    mainTitle: "Happy Birthday Thư! 🌸",
    message: "Hôm đó là một ngày đặt biệt, dù hơi trễ nhưng mà tui có vài dòng muốn gửi tới fen",
    openButtonText: "Open this sheet.........  ✨",
    hintText: "(Nhớ mở cái loa lên! 🎵)",
  },

  // 4. MÀN HÌNH 3 — THIỆP CHÚC MỪNG SINH NHẬT
  wishCard: {
    badge: "Special Day • 21.10",
    heading: "Happy Birthday Our Sweet Girl!",
    handwrittenGreeting: "Dear Thư ng* =)))",
    paragraphs: [
      "Tui biết là mặc dù hơi muộn, tầm chục ngày chớ nhiu=)))",
      "Chúc Thư bước sang tuổi mới luôn luôn xinh đẹp, mạnh mẽ, rạng rỡ và ngập tràn hạnh phúc trong từng khoảnh khắc.",
      "Mong cho mọi dự định và ước mơ của fen đều sẽ sớm thành hiện thực rực rỡ như bầu trời xanh ngát hôm nay. Dù phía trước có thử thách nào, kệ mẹ nó luôn ae tui vẫn ở đây để fen tâm sự nha!",
      "Mong mọi điều tốt đẹp nhất sẽ đến với fen, không chỉ hôm nay mà trong những năm tới. Cảm ơn vì đã luôn là một người tuyệt vời với tụi tui ♥️🔥. Hết biết viết gì rồi nên là Happy Birthday Thư ! 🎂🌻",
    ],
    signature: "From Phat to the Duy to the Trung with full love <3",
  },

  // 5. MÀN HÌNH 4 — ALBUM KỶ NIỆM (POLAROID SCRAPBOOK)
  memories: [
    {
      id: 1,
      image: "/images/img1.jpg",
      thumbnail: "/images/memories/img1-thumb.webp",
      title: "Phá đảo AN1",
      caption: "Anh em tao đi tìm Thư Nguyễn ✨",
      tag: "Memory #01",
      rotation: "-1.5deg",
    },
    {
      id: 2,
      image: "/images/img2.jpg",
      thumbnail: "/images/memories/img2-thumb.webp",
      title: "Top những lần đầy đủ nhất",
      caption: "Thêm nhìu lần quậy đủ hỉu lòng người 🍰",
      tag: "Memory #02",
      rotation: "2deg",
    },
    {
      id: 3,
      image: "/images/img3.jpg",
      thumbnail: "/images/memories/img3-thumb.webp",
      title: "Chửi nhau nhưng mà đi ăn kem bơ dm tụi mày=))",
      caption: "Chửi nhau thật nhìu nhưng mà cũng yêu thương thật nhìu 🐾",
      tag: "Memory #03",
      rotation: "-1deg",
    },
    {
      id: 4,
      image: "/images/img4.jpg",
      thumbnail: "/images/memories/img4-thumb.webp",
      title: "Mắt nai ơi cha cha cha cha bay!",
      caption: "Đi siêu thị siêu quậy🌸",
      tag: "Memory #04",
      rotation: "2deg",
    },
    {
      id: 5,
      image: "/images/img5.jpg",
      thumbnail: "/images/memories/img5-thumb.webp",
      title: "Má Thu cùng đàn con ghẻ của chỉ",
      caption: "Có hỉu lầm, có hờn dỗi, đến cuối vẫn là anh em.... wo man bòi yong",
      tag: "Memory #05",
      rotation: "-2deg",
    },
    {
      id: 6,
      image: "/images/img6.jpg",
      thumbnail: "/images/memories/img6-thumb.webp",
      title: "Bầu trời mới",
      caption: "Mỗi người 1 ngã nhưng mà mong rằng đều hướng về nhau. POV lần đầu xa nhà aka lần đầu đi chơi SG đủ mặt aka super badtrip đáng nhớ. ☁️",
      tag: "Memory #06",
      rotation: "1.5deg",
    },
  ],

  // 6. MÀN HÌNH 5 — CHIẾC BÁNH KEM ƯỚC NGUYỆN
  cakeSection: {
    title: "Remind đủ rồi ước lẹ thổi nến cho tao!!! 🎂",
    subtitle: "NHANHHHHHHHHHHHH!",
    buttonText: "PHIUUUUUUUUUUUU```````🕯️",
    wishedText: "✨ Heheheheheh ước xong rồi thế mình ăn bánh được chưa! ✨",
  },

  // 7. MÀN HÌNH 6 — LÁ THƯ CUỐI (FINAL LETTER)
  finalLetter: {
    letterTitle: "The last thing I wanna say 💌",
    waxSealText: "FOR FEN",
    sender: "Tụi tui — Những người bạn luôn bên cạnh fen",
    body: [
      "Dear Thư,",
      "Có một người bạn chân thành, đáng yêu và luôn hết mình như fen là một điều cực kỳ may mắn với tụi tui.",
      "Cũng không còn nhỏ nữa, hãy cứ tự tin bước đi trên con đường fen đã chọn, ăn những món ngon, đi đến những vùng đất mới, và luôn giữ trọn nụ cười hồn nhiên trên môi.",
      "Mong fen một đời may mắn, nhiều niềm vui và luôn được bao bọc bởi những điều ấm áp nhất, gặp những con người thực sự quý mến và thương mình. Đây cũng là lời văn của Phát Lê đại diện thôi nhưng mà tao cũng nghĩ là 2 thằng em còn lại cũng nghĩ vậy, cũng mong những điều tuyệt nhất đến với lineup tụi mình thôi. Sinh nhật thật hạnh phúc nha bạn!!!",
    ],
    closing: "Tao biết là delay rồi nhưng mà chú ý ae tao 1 tí !!!! 🌻✨",
    replayButtonText: "Nếu muốn coi lại. Nhấn vào đây nè 🔄",
  },
};
